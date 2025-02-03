import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from "./Home.module.scss";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [images, setImages] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  let navigate = useNavigate();

  function getCategories() {
    setisLoading(true);
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((res) => {
        setCategories(res.data.categories);
        setisLoading(false);
      })
      .catch(error => {
        setisLoading(false);
      });
  }

  function getImages(id = "All") {
    setisLoading(true);
    const url = id == "All"
      ? `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;

    axios.get(url)
      .then((res) => {
        setImages(res.data.meals);
        setSelectedCategories(id);
        setisLoading(false);
      })
      .catch(error => {
        setisLoading(false);
      });
  }

  function searchinput(e) {
    const value = e.target.value;
    setSearchValue(value);

    if (!value.trim()) {
      getImages();
      return;
    }

    setisLoading(true);
    let searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?";
    if (value.length == 1) {
      searchUrl += `f=${value}`;
    } else {
      searchUrl += `s=${value}`;
    }

    axios.get(searchUrl)
      .then((res) => {
        console.log("Search Results:", res.data.meals);
        setImages(Array.isArray(res.data.meals) ? res.data.meals : []);
        setisLoading(false);
      })
      .catch(() => {
        setisLoading(false);
      });
  }



  function toDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    getCategories();
    getImages();
  }, []);

  if (isLoading) {
    return <div className="spinner" />;
  }

  return (
    <>
      <div className="p-16 sm:ml-64 bg-[#F4F2EE] container pt-10">
        <h1 className={`${style["font-h1"]} bg-gradient-to-r from-[#E07460] via-[#F29724] to-[#E07460] bg-clip-text text-transparent text-4xl font-semibold`}>
          Learn, Cook, Eat Your Food
        </h1>

        <div>
          <ul className='flex px-3 py-5 flex-wrap gap-4'>
            <li>
              <button
                className={`rounded-2xl py-2 px-4 ${selectedCategories == "All" ? "bg-black text-white" : "bg-gray-200 text-gray-500"} active:bg-black focus:bg-black focus:text-white`}
                onClick={() => getImages("All")}  //Style
              >
                All
              </button>
            </li>
            {categories ? (
              categories.map((category) => (
                <li key={category.idCategory}>
                  <button
                    onClick={() => getImages(category.strCategory)}   //Beef , seaFood... 
                    className={`rounded-2xl py-2 px-4 ${selectedCategories == category.strCategory ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
                  >
                    {category.strCategory}
                  </button>
                </li>
              ))
            ) : (
              <div className="spinner" />
            )}
            <div className="w-full container h-[1px] bg-gray-300 my-4"></div>
          </ul>

          <form class="max-w-md mx-auto mb-3 mt-3">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search Meals..."
                value={searchValue}
                onChange={searchinput}
              />
            </div>
          </form>

          {images ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <div key={image.idMeal} className="flex justify-center">
                  <div className="hover:scale-105 group p-2 mt-20 w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                    <img
                      className="w-40 h-40 rounded-full shadow-lg absolute left-1/2 top-[-70px] transform -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:rotate-[360deg]"
                      src={image.strMealThumb}
                      alt={image.strMeal}
                    />
                    <div className="flex flex-col items-center pb-10 pt-16">
                      <h5 className="mb-1 mt-8 text-xl font-medium text-black">{image.strMeal.split(" ").slice(0, 3).join(" ")}</h5>
                      {selectedCategories === "All" ? (
                        <span className="text-sm text-emerald-500">
                          <i className="fa-solid fa-earth-americas pe-3"></i>
                          {image.strArea}
                        </span>
                      ) : null}
                      <button onClick={() => toDetails(image.idMeal)} className={`${style["btn-card"]} mt-6 cursor-pointer`}>
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
