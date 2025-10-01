import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png"; // Assuming your logo looks good on a dark background

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "coverage", "pricing"];

  return (
    <nav className="w-full bg-neutral-950 border-b border-gray-800 fixed top-0 left-0 z-50 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <a href="#home">
            <img src={Logo} alt="logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition duration-300 group font-medium"
            >
              {item}
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Download Now Button (styles are fine for dark mode) */}
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            Download Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={toggleMenu} // Clicking on overlay closes menu
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-screen bg-gray-900 border-l border-gray-700 px-6 py-8 space-y-6 md:hidden z-40"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button onClick={toggleMenu} className="text-gray-300">
                  <X size={28} />
                </button>
              </div>

              {/* Menu items */}
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  className="block text-lg font-medium text-gray-300 hover:text-blue-500 transition duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-3 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
                Download Now
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
