// src/components/Header.jsx

import React, { useContext } from "react";
import { FaBell, FaEnvelope, FaSearch, FaBars } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

// تمت إضافة prop جديدة `onToggleSidebar`
const Header = ({ onToggleSidebar }) => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();
  // const { user } = useContext(AuthContext);

  // if (!user) {
  //     return null;
  // }

  return (
    <nav className="bg-white p-4 px-4 lg:px-12 flex justify-between lg:justify-end items-center w-full">
      {/* زر القائمة للشاشات الصغيرة */}
      <button
        onClick={onToggleSidebar}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <FaBars size={24} />
      </button>

      {/* شريط البحث */}
      {/* <div className="relative flex-1 max-w-sm hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaSearch className="text-gray-400" />
                </span>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] bg-gray-100"
                />
            </div> */}

      {/* الأيقونات وملف المستخدم */}
      <div className="flex items-center space-x-6 mr-4">
        {/* <div className="flex space-x-4">
                    <div className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                        <FaBell className="h-5 w-5 text-gray-600" />
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                    </div>
                    <div className="relative p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                        <FaEnvelope className="h-5 w-5 text-gray-600" />
                        <span className="absolute top-0 right-0 h-2 w-2 bg-blue-500 rounded-full ring-2 ring-white"></span>
                    </div>
                </div> */}
        <div className="flex items-center space-x-6 cursor-pointer">
          <img
            src="/public/assets/image/avatar-04.png"
            alt="User Avatar"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <span className="font-bold text-gray-700  block text-[16px]">
              مكين خواجكيه
            </span>
            <span className="text-[14px]">مدير</span>
          </div>
          <div className="group relative">
            <div className="font-medium text-lg hover:text-[#B88647] transition duration-300 flex items-center cursor-pointer">
              <span>{language === "en" ? "English" : "العربية"}</span>
              <FaChevronDown className="ml-1 text-sm group-hover:rotate-180 transition-transform duration-300" />
            </div>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2
              bg-white shadow-lg rounded-md cursor-pointer
              opacity-0 group-hover:opacity-100
              group-hover:visible invisible
              transition-opacity duration-300 transform scale-95 group-hover:scale-100"
            >
              <span
                onClick={() => {
                  changeLanguage(language === "ar" ? "en" : "ar");
                }}
                className="block px-6 py-3 whitespace-nowrap text-gray-800 hover:bg-[#7899B2] hover:text-white transition duration-300 last:hover:rounded-b-md"
              >
                {language === "ar" ? "الانجليزية" : "Arabic"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
