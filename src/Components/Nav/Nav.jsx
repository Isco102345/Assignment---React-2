// import React from 'react'
// import { Link } from 'react-router-dom'
// import style from "./Nav.module.scss"

// export default function Nav() {
//   return (
//     <>
//         <aside id="logo-sidebar" className="fixed top-0 left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  " aria-label="Sidebar">
//           <div className=" h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
//             <Link to={'/'} className="flex items-center  mb-5">
//               <img src="./src/assets/logo-BfNap0Pe.png" className="w-full" alt="Logo" />
//             </Link>
//             <ul className="space-y-2 font-medium">
//               <li>
//                 <Link to={"/"} className="btn btn-border flex items-center p-2 text-gray-900 rounded-lg dark:text-white mb-3  group">
//                   <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
//                     <path d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z" />
//                   </svg>
//                   <i class="fa-solid fa-utensils"></i><span className="ms-3">Meals</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/"} className="btn-border flex items-center p-2 text-gray-900 rounded-lg dark:text-white mb-3 group">
//                   <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">

//                   </svg>
//                   <i class="fa-solid fa-utensils"></i><span className="flex-1 ms-3 whitespace-nowrap">Ingredients</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/"} className="btn-border flex items-center p-2 text-gray-900 rounded-lg dark:text-white mb-3 group">
//                   <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">

//                   </svg>
//                   <i class="fa-solid fa-utensils"></i><span className="flex-1 ms-3 whitespace-nowrap">Area</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </aside >
//     </>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Nav.module.scss"

export default function Nav() {
  return (
    <>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-0 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  " aria-label="Sidebar">
          <div className=" h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <Link to={'/'} className="flex items-center  mb-5">
            <img src="./src/assets/logo-BfNap0Pe.png" className="w-full" alt="Logo" />
            </Link>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to={"/"} className={`${style.btn} ${style["btn-border"]} flex items-center p-2 text-white rounded-lg dark:text-white mb-3  group`}>
                  <i className="fa-solid fa-utensils"></i><span className="ms-3">Meals</span>
                </Link>
              </li>
              <li>
                <Link to={"/"} className={`${style["btn-border"]} flex items-center p-2 text-gray-900 rounded-lg dark:text-white mb-3 group`}>
                  <i className="fa-solid fa-utensils"></i><span className="flex-1 ms-3 whitespace-nowrap">Ingredients</span>
                </Link>
              </li>
              <li>
                <Link to={"/"} className={`${style["btn-border"]} flex items-center p-2 text-gray-900 rounded-lg dark:text-white mb-3 group`}>
                  <i className="fa-solid fa-utensils"></i><span className="flex-1 ms-3 whitespace-nowrap">Area</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
    </>
  )
}
