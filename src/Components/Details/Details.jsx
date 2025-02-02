import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./Details.module.scss"


export default function Details() {
  const [Products, setProduct] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams()

  function getProduct(id) {
    setisLoading(true);
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        console.log(res.data.meals);
        const meal = res.data.meals ? res.data.meals[0] : null;
        setProduct(meal);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the Details:", error);
        setisLoading(false);
      });
  }

  useEffect(() => {
    getProduct(id);
  }, [id]);

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  return (
    <>
      <div className="p-12 sm:ml-64  bg-[#F4F2EE] container pt-10">
        {Products ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div>
            <p className={`font-bold mb-3 ${style["meals-font"]}`}>{Products.strCategory}</p>
              <img className="w-full rounded-lg" src={Products.strMealThumb} alt={Products.strMeal} />
              <div className="flex gap-3 mt-4 justify-center">
              <button className={style["btn-button1"]}><i className="fa-brands fa-youtube pe-1" />Youtube</button>
              <button className={style["btn-button2"]}><i className="fa-solid fa-globe pe-3" />Source</button>
              </div>
            </div>

            <div>
              <p>{Products.strInstructions}</p>
            </div>

            <div>
              <div className=" max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                      <p className="font-bold">Ingredients</p>
                      <div className="w-full container h-[3px] bg-gray-300 my-4"></div>
                      <div className="flex justify-between items-center min-w-0 ms-4">
                        <p className="flex-1 text-gray-900 dark:text-white">{Products.strIngredient1}</p>
                        <p className="flex-none text-gray-500 dark:text-gray-400">{Products.strMeasure1}</p>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex justify-between items-center min-w-0 ms-4">
                        <p className="flex-1 text-gray-900 dark:text-white">{Products.strIngredient2}</p>
                        <p className="flex-none text-gray-500 dark:text-gray-400">{Products.strMeasure2}</p>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex justify-between items-center min-w-0 ms-4">
                        <p className="flex-1 text-gray-900 dark:text-white">{Products.strIngredient3}</p>
                        <p className="flex-none text-gray-500 dark:text-gray-400">{Products.strMeasure3}</p>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex justify-between items-center min-w-0 ms-4">
                        <p className="flex-1 text-gray-900 dark:text-white">{Products.strIngredient4}</p>
                        <p className="flex-none text-gray-500 dark:text-gray-400">{Products.strMeasure4}</p>
                      </div>
                    </li>
                    <li className="pt-3  pb-0 mb-0">
                      <div className="flex justify-between items-center min-w-0 ms-4">
                        <p className="flex-1 text-gray-900 dark:text-white">{Products.strIngredient5}</p>
                        <p className="flex-none text-gray-500 dark:text-gray-400">{Products.strMeasure5}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

    </>
  );
}
