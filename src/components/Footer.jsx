import React from "react";
import logo from "../assets/Logo.svg";
import emailIcon from "../assets/emailIcon.svg";
import locationIcon from "../assets/locationIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import facebookIcon from "../assets/facebookIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import youtubeIcon from "../assets/youtubeIcon.svg";
import phoneIcon from "../assets/telephoneIcon.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
          <div className="border border-gray-500 rounded-lg p-4 sm:p-6 w-full text-center">
            <h3 className="text-blue-500 font-bold uppercase text-sm sm:text-base mb-2">
              Connect with us
            </h3>
            <div className="text-gray-400 text-xs sm:text-sm">
              <p className="flex items-center justify-center space-x-2">
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
                <span className="text-[#857878]">+91 9567843340</span>
              </p>
              <p className="flex items-center justify-center space-x-2 mt-1">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
                <span className="text-[#857878]">info@deepnetsoft.com</span>
              </p>
            </div>
          </div>

          <div className="relative border border-gray-500 rounded-lg p-4 sm:p-6 w-full flex flex-col items-center">
            <img
              src={logo}
              alt="Deep Net Soft"
              className="w-12 sm:w-16 h-12 sm:h-16 absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 bg-black p-1 rounded-full"
            />
            <h2 className="text-xl sm:text-2xl mt-6 sm:mt-8 text-center">
              <span className="text-blue-500">DEEP</span>{" "}
              <span className="text-white">NET</span>
              <span className="text-[#857878]"> SOFT</span>
            </h2>

            <div className="flex justify-center space-x-3 sm:space-x-4 mt-2 text-gray-400">
              <a href="#" className="hover:text-white">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
              <a href="#" className="hover:text-white">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
              <a href="#" className="hover:text-white">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
              <a href="#" className="hover:text-white">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
              </a>
            </div>
          </div>

          <div className="border border-gray-500 rounded-lg p-4 sm:p-6 w-full text-center">
            <h3 className="text-[#0796EF] uppercase text-sm sm:text-base mb-2">
              Find us
            </h3>
            <div className="text-gray-400 text-xs sm:text-sm">
              <p className="flex items-center justify-center space-x-2">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="w-4 sm:w-5 h-4 sm:h-5"
                />
                <span className="text-[#857878]">
                  First Floor, Geo Infopark, <br /> Infopark EXPY, Kakkanad
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between">
          <p className="text-xs sm:text-sm">
            © 2024 Deepnetsoft Solutions. All rights reserved.
          </p>
          <div className="flex space-x-3 sm:space-x-4 text-xs sm:text-sm">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
