// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaSearch,
  FaBars,
  FaChevronDown,
} from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { useTranslation } from "react-i18next";

const Header = ({ onToggleSidebar }) => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  return (
    <nav
      className={`h-20 bg-white p-4 px-4 lg:px-12 flex items-center justify-between lg:justify-end w-full`}
    >
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
      >
        <FaBars size={24} />
      </button>
      <div
        className={`flex items-center gap-6 cursor-pointer ${
          language === "en" ? "flex-row-reverse" : ""
        }`}
      >
        <img
          src="/public/assets/image/avatar-04.png"
          alt="User Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div
          className={`
          } whitespace-nowrap`}
        >
          <span className="font-bold text-gray-700  block text-[16px]">
            مكين خواجكيه
          </span>
          <span className="text-[14px]">مدير</span>
        </div>
        <div className="group relative text-[var(--text-color)]">
          <div className="text-lg transition duration-300 font-bold flex gap-2 justify-between items-center cursor-pointer">
            <span>{language === "en" ? "English" : "العربية"}</span>
            <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
          </div>
          <div
            className="absolute top-full right-1/2 translate-x-1/2
              bg-white shadow-lg rounded-md cursor-pointer
              opacity-0 group-hover:opacity-100
              group-hover:visible invisible
              transition-opacity duration-300 transform scale-95 group-hover:scale-100"
          >
            <span
              onClick={() => {
                changeLanguage(language === "ar" ? "en" : "ar");
              }}
              className="block px-6 py-3 whitespace-nowrap hover:bg-[#7899B2] hover:text-white transition duration-300 rounded-md"
            >
              {language === "ar" ? "الانجليزية" : "Arabic"}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
