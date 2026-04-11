'use client'
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll function
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close mobile menu after click
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-red-800 tracking-wide">
          Pranav Malve
        </h1>

        {/* Desktop Navigation */}
<nav className="hidden md:flex gap-8 text-gray-700 font-medium">
  <button
    onClick={(e) => handleScroll(e, "#home")}
    className="hover:text-black transition"
  >
    Home
  </button>

  <button
    onClick={(e) => handleScroll(e, "#about")}
    className="hover:text-black transition"
  >
    About
  </button>

  <button
    onClick={(e) => handleScroll(e, "#projects")}
    className="hover:text-black transition"
  >
    Projects
  </button>

  <button
    onClick={(e) => handleScroll(e, "#contact")}
    className="hover:text-black transition"
  >
    Contact
  </button>
</nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={(e) => handleScroll(e, "#contact")}
            className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="block">Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="block">About</a>
          <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="block">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="block">Contact</a>

          <button
            onClick={(e) => handleScroll(e, "#contact")}
            className="w-full bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;