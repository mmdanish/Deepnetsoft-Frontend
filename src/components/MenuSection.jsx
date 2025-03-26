import React from "react";
import menubg from "../assets/menuBackground.jpg";
import leftgraphic from "../assets/graphics2.svg";
import rightgraphic from "../assets/graphics1.svg";
import juice1 from "../assets/juice1.svg";
import juice2 from "../assets/juice2.svg";

const MenuSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-8 px-4 sm:py-12 sm:px-6 lg:px-20"
      style={{ backgroundImage: `url(${menubg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Left Decorative Graphic */}
      <img
        src={leftgraphic}
        alt="Left Graphic"
        className="absolute left-0 top-0 h-full opacity-40 hidden sm:block"
      />

      {/* Right Decorative Graphic */}
      <img
        src={rightgraphic}
        alt="Right Graphic"
        className="absolute right-0 top-0 h-full opacity-40 hidden sm:block"
      />

      {/* Menu Content */}
      <div className="relative border border-gray-600 p-6 sm:p-10 max-w-5xl mx-auto">
        {/* Left Drink Image */}
        <div className="absolute -top-12 sm:-top-20 left-0 w-16 sm:w-20 h-24 sm:h-32">
          <img
            src={juice1}
            alt="Left Drink"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-center text-white tracking-widest relative">
          Brunch Cocktails
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-1 w-12 sm:w-16 bg-gray-400"></span>
        </h2>

        {/* Drinks List */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
          {/* Left Side */}
          <div>
            <div className="flex justify-between items-center min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase truncate">
                Cinnamon Toast Crunch
                ........................................................
              </h3>
              <span className="text-base sm:text-lg text-white font-semibold flex-shrink-0 ml-2">
                $16
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Skrewball peanut butter whiskey, vanilla extract, Amaretto,
              Baileys, egg white, cinnamon
            </p>

            <div className="mt-4 flex justify-between items-center min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase truncate">
                Bar 42 Mary
                ...............................................................................
              </h3>
              <span className="text-base sm:text-lg text-white font-semibold flex-shrink-0 ml-2">
                $14
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Titos, tomato juice, worcestershire, celery salt, black pepper,
              tabasco, fully loaded
            </p>
          </div>

          {/* Right Side */}
          <div>
            <div className="flex justify-between items-center min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-white uppercase truncate">
                Moet Spritz
                ..............................................................................
              </h3>
              <span className="text-base sm:text-lg text-white font-semibold flex-shrink-0 ml-2">
                $14
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Aperol, St Germain, botanical liquor, fresh lime juice, mini brut
              Moet topper
            </p>
          </div>
        </div>

        {/* Right Drink Image */}
        <div className="absolute -bottom-8 sm:-bottom-10 right-0 w-20 sm:w-24 h-24 sm:h-32">
          <img
            src={juice2}
            alt="Right Drink"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
