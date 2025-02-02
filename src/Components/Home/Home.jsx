// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import style from "./Home.module.scss"


// export default function Home() {
//   const [categories, setCategories] = useState(null);
//   const [selectedCategories, setSelectedCategories] = useState("All");
//   const [images, setImages] = useState(null);
//   const [isLoading, setisLoading] = useState(false);
//   let navigate = useNavigate()


//   function getCategories() {
//     setisLoading(true)
//     axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
//       .then((res) => {
//         console.log(res.data.categories);
//         setCategories(res.data.categories);
//         setisLoading(false)
//       })
//       .catch(error => {
//         console.error("There was an error fetching the categories:", error);
//         setisLoading(false)
//       });
//   }

//   function getImages(id = "All") {
//     setisLoading(true)
//     const url = id == "All" ?
//       (`https://www.themealdb.com/api/json/v1/1/search.php?s=`) :
//       (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
//     axios.get(url)
//       .then((res) => {
//         console.log(res.data.meals);
//         setImages(res.data.meals);
//         setSelectedCategories(id)
//         setisLoading(false)
//       })
//       .catch(error => {
//         console.error("There was an error fetching the Images:", error);
//         setisLoading(false)
//       });
//   }

//   function toDetails(id) {
//     navigate(`/details/${id}`); 
//   }

//   useEffect(() => {
//     getCategories();
//     getImages()
//   }, []);

//   if (isLoading) {
//     return <div className="spinner" />
//   }

//   return (
//     <>
//       <div className="p-16 sm:ml-64  bg-[#F4F2EE] container pt-10 ">
//         <h1 className='font-h1 bg-gradient-to-r from-[#E07460] via-[#F29724] to-[#E07460] bg-clip-text text-transparent text-4xl font-semibold'>
//           Learn, Cook, Eat Your Food
//         </h1>
//         <div>
//           <ul className='flex px-3 py-5 flex-wrap gap-4'>
//             <li>
//               <button
//                 className={`rounded-2xl py-2 px-4 ${selectedCategories == "All" ? "bg-black text-white" : "bg-gray-200 text-gray-500"} active:bg-black focus:bg-black focus:text-white`}
//                 onClick={() => getImages("All")}  //Style
//               >
//                 All
//               </button>
//             </li>
//             {categories ? (
//               categories.map((category) => (
//                 <li key={category.idCategory}>
//                   <button
//                     onClick={() => getImages(category.strCategory)}   //Beef , seaFood... 
//                     className={`rounded-2xl py-2 px-4 ${selectedCategories == category.strCategory ? "bg-black text-white" : "bg-gray-200 text-gray-500"}`}
//                   >
//                     {category.strCategory}
//                   </button>
//                 </li>
//               ))
//             ) : (
//               <div className="spinner" />
//             )}
//             <div className="w-full container h-[1px] bg-gray-300 my-4"></div>
//           </ul>
//           {images ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {images.map((image) => (
//                 <div key={image.idMeal} className="flex justify-center">
//                   <div className="hover:scale-105 group p-2 mt-20 w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
//                     <img
//                       className="w-40 h-40 rounded-full shadow-lg absolute left-1/2 top-[-70px] transform -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:rotate-[360deg]"
//                       src={image.strMealThumb}
//                       alt={image.strMeal}
//                     />
//                     <div className="flex flex-col items-center pb-10 pt-16">
//                       <h5 className="mb-1 mt-8 text-xl font-medium text-black">{image.strMeal.split(" ").slice(0, 3).join(" ")}</h5>
//                       {selectedCategories == "All" ? <span className="text-sm text-emerald-500">
//                         <i className="fa-solid fa-earth-americas pe-3"></i>
//                         {image.strArea}
//                       </span>
//                         : null}
//                       <button onClick={() => toDetails(image.idMeal)} className='btn-card mt-6 cursor-pointer'>View Recipe</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : null}

//         </div>
//       </div>

//     </>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from "./Home.module.scss";

export default function Home() {
  const [categories, setCategories] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState("All");
  const [images, setImages] = useState(null);
  const [isLoading, setisLoading] = useState(false);
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
