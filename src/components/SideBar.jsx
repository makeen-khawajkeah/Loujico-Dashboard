// src/components/SideBar.jsx
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaProjectDiagram,
  FaFileInvoiceDollar,
  FaHome,
  FaHandshake,
  FaUserTie,
  FaFolder,
} from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { IoSettings, IoClose } from "react-icons/io5";
import { AuthContext } from "../Context/AuthContext";

const SideBar = ({ isOpen, onClose }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  // const { user } = useContext(AuthContext);

  const sideBarItems = [
    { name: t("sideBar.dashboard"), path: "/dashboard", icon: <FaHome /> },
    { name: t("sideBar.users"), path: "/users", icon: <FaUserAlt /> },
    { name: t("sideBar.customers"), path: "/customers", icon: <FaHandshake /> },
    { name: t("sideBar.employees"), path: "/employees", icon: <FaUserTie /> },
    {
      name: t("sideBar.projects"),
      path: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: t("sideBar.invoices"),
      path: "/invoices",
      icon: <FaFileInvoiceDollar />,
    },
    { name: t("sideBar.products"), path: "/products", icon: <AiFillProduct /> },
    { name: t("sideBar.logs"), path: "/logs", icon: <HiDocumentText /> },
    { name: t("sideBar.settings"), path: "/settings", icon: <IoSettings /> },
  ];

  // if (!user) {
  //     return null;
  // }
  return (
    <div
      className={`
            side-bar w-[260px]  min-h-screen flex flex-col items-center
            bg-white transform transition-transform duration-300 ease-in-out
            fixed top-0 right-0 z-50 lg:relative lg:translate-x-0 shrink-0
            ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
    >
      <div className="flex justify-between items-center w-full  pt-10 lg:hidden gap-10 px-5">
        <img
          src="/public/assets/image/logo.png"
          alt={t("logoAlt")}
          className="w-[150px]"
        />
        <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
          <IoClose size={24} />
        </button>
      </div>

      <img
        src="/public/assets/image/logo.png"
        alt={t("logoAlt")}
        className="w-[200px] my-10 hidden lg:block"
      />

      <ul className="w-full">
        {sideBarItems.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? "text-[var(--sub-color-lighter)]"
                  : "bg-white text-[var(--text-color)]"
              }
            >
              <li className="flex items-center py-[18px] justify-between hover:bg-gray-200 w-full px-10 duration-300 font-bold">
                {item.name}
                <div className="">{item.icon}</div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
