// src/components/SideBar.jsx

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt, FaProjectDiagram, FaFileInvoiceDollar, FaHome, FaHandshake, FaUserTie, FaFolder } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { IoSettings, IoClose } from "react-icons/io5";
import { AuthContext } from '../Context/AuthContext';

// تمت إضافة prop جديدة `isOpen` و `onClose`
const SideBar = ({ isOpen, onClose }) => {
    // const { user } = useContext(AuthContext);
    const sideBarItems = [
        { name: "لوحة التحكم", path: "/dashboard", icon: <FaHome /> },
        { name: "المستخدمون", path: "/users", icon: <FaUserAlt /> },
        { name: "العملاء", path: "/customers", icon: <FaHandshake /> },
        { name: "الموظفون ", path: "/employees", icon: <FaUserTie /> },
        { name: "المشاريع", path: "/projects", icon: <FaProjectDiagram /> },
        { name: "الفواتير", path: "/invoices", icon: <FaFileInvoiceDollar /> },
        { name: "المنتجات", path: "/products", icon: <AiFillProduct /> },
        { name: "السجلات", path: "/logs", icon: <HiDocumentText /> },
        { name: "الإعدادات ", path: "/settings", icon: <IoSettings /> },
    ];

    // if (!user) {
    //     return null;
    // }
    return (
        <div className={`
            side-bar w-[260px]  min-h-screen flex flex-col items-center
            bg-white transform transition-transform duration-300 ease-in-out
            fixed top-0 right-0 z-50 lg:relative lg:translate-x-0 shrink-0
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
            <div className="flex justify-between items-center w-full  pt-10 lg:hidden gap-10 px-5">
                <img src="/public/assets/image/logo.png" alt="logo image" className='w-[150px]' />
                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                    <IoClose size={24} />
                </button>
            </div>

            <img src="/public/assets/image/logo.png" alt="logo image" className='w-[200px] my-10 hidden lg:block' />

            <ul className="w-full">
                {
                    sideBarItems.map((item, index) => {
                        return (
                            <NavLink
                                key={index}
                                to={item.path}
                                onClick={onClose} // يغلق الشريط الجانبي بعد الانتقال
                                className={({ isActive }) =>
                                    (isActive) ? "text-[var(--sub-color-lighter)]" : "bg-white text-[var(--text-color)]"
                                }
                            >
                                <li className='flex items-center py-[18px] justify-between hover:bg-gray-200 w-full px-10 duration-300 font-bold'>
                                    {item.name}
                                    <div className=''>{item.icon}</div>
                                </li>
                            </NavLink>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default SideBar;