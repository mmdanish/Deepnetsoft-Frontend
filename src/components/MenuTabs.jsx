import React from 'react'
import background from '../assets/menuTabsBg.jpg'

const MenuTabs = () => {
  return (
    <div
      className="py-4 flex justify-center space-x-4 relative"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Buttons */}
      <div className="relative flex space-x-4 px-4">
        <button className="px-6 py-2 border-2 border-white text-white uppercase tracking-widest hover:bg-blue-500 hover:text-white transition">
          Food
        </button>
        <button className="px-6 py-2 border-2 border-blue-500 bg-blue-500 text-white uppercase tracking-widest">
          Drinks
        </button>
        <button className="px-6 py-2 border-2 border-white text-white uppercase tracking-widest hover:bg-blue-500 hover:text-white transition">
          Brunch
        </button>
      </div>
    </div>
  )
}

export default MenuTabs
