import React from "react";

const Hero = () => {
  return (
    <div className="text-center py-10 sm:py-20 px-4 sm:px-0">
      {/* Hero Title */}
      <h1 className="text-4xl sm:text-6xl font-bold uppercase text-white tracking-wide">
        Menu
      </h1>

      {/* Hero Description */}
      <p className="text-base sm:text-lg text-gray-300 max-w-md sm:max-w-2xl mx-auto mt-4 font-['Kelly_Slab']">
        Please take a look at our menu featuring food, drinks, and brunch. If
        you'd like to place an order, use the "Order Online" button located
        below the menu.
      </p>
    </div>
  );
};

export default Hero;