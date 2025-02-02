import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bottom-0 left-0 right-0 pt-2 text-center flex flex-col items-center justify-between  bg-white  rounded-lg shadow-sm  z-[55] relative">
        <div className="flex justify-between items-center w-3/4">
          <div className="flex items-center">
            <img
              src="./src/assets/logo-BfNap0Pe.png"
              className="w-8 h-8 "
              alt="Logo"
            />
            <p className="text-lg font-medium">Recipe</p>
          </div>
          <p className="text-blue-700 text-lg font-medium">Route</p>
        </div>
        <div className="w-full container h-[1px] bg-gray-300 my-4"></div>
        <p className="text-gray-400 text-sm text-center mb-2">
          © 2025 Nagy Osama™. All Rights Reserved.
        </p>
      </footer>
    </>
  )
}