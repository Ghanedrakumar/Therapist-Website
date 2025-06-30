// components/Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav className=" p-4 bg-white shadow-md flex sticky top-0 z-50">

            <ul className="flex items-center">
                <li>
                    <NavLink to="/" className="text-blue-500 hover:text-blue-700 ml-20">
                        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75" alt="Logo" className="h-16 w-40 inline-block transparent" />
                    </NavLink>
                </li>
            </ul>
            <ul className="flex justify-center gap-7 items-center ml-20">
                <li className=" ">
                    <NavLink to="/service"  smooth={true} duration={500} end className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-50 ">
                        Services
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/about" smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-50">
                        About
                    </NavLink>
                </li>
                <li className="">
                    <NavLink to="/contact" smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-50">
                        Rates & FAQs
                    </NavLink>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;
