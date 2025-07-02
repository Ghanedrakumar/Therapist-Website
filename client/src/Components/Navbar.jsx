// components/Navbar.js
import React from "react";
import {  NavLink } from "react-router-dom";
import { Link } from "react-scroll";
function Navbar() {
    return (
        <nav className=" p-4 bg-slate-100 shadow-md flex sticky top-0 z-50  wrap-break-word overflow-hidden">

            <ul className="flex items-center">
                <li>
                    <NavLink to="/" className="text-blue-500 hover:text-blue-700 ml-20">
                        <img src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75" alt="Logo" className="h-16 w-40 inline-block transparent" />
                    </NavLink>
                </li>
            </ul>
            <div className="flex-grow flex items-center justify-center">

            <ul className=" flex ">
                <li className="cursor-pointer ">
                    <NavLink to="/service"  smooth={true} duration={500} end className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-25 ">
                        Services
                    </NavLink>
                </li>
                <li className="cursor-pointer ">
                    <Link to="testimonials"  smooth={true} duration={500} end className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-25 ">
                        Testimonials
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="about" smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-25">
                        About
                    </Link>
                </li>
                <li className="cursor-pointer">
                    <Link to="ratefacts" smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-25">
                        Rates & FAQs
                    </Link>
                </li>
                <li className="">
                    <NavLink to="/contact" smooth={true} duration={500} className="text-blue-500 hover:text-blue-700 text-1xl font-bold ml-25">
                      Contact
                    </NavLink>
                </li>

            </ul>


            </div>

        </nav>
    );
}

export default Navbar;
