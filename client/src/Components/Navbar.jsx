import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-slate-100 shadow-md sticky top-0 z-50 pr-5">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 ">
        {/* Logo */}
        <NavLink to="/">
          <img
            src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-1.42b3afe7.png&w=256&q=75"
            alt="Logo"
            className="h-16 w-40"
          />
        </NavLink>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex space-x-10 font-bold text-blue-500">
          <li>
            <NavLink to="/service" className="hover:text-blue-700">
              Services
            </NavLink>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-700"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="ratefacts"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-700"
            >
              Rates & FAQs
            </Link>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-blue-700">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 font-semibold text-blue-600">
          <li onClick={closeMenu}>
            <NavLink to="/service" className="hover:text-blue-700">
              Services
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <Link to="about" smooth={true} duration={500} className="hover:text-blue-700">
              About
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="testimonials" smooth={true} duration={500} className="hover:text-blue-700">
              Testimonials
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="ratefacts" smooth={true} duration={500} className="hover:text-blue-700">
              Rates & FAQs
            </Link>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact" className="hover:text-blue-700">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
