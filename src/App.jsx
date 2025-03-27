import React from "react";
import Navbar from "./components/Navbar";
import bgImage from "./assets/background.jpg";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import MenuTabs from "./components/MenuTabs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white">
        <Navbar />
        <Hero />
        <MenuTabs />
        <MenuSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
