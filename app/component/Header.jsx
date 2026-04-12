"use client";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          Pranav Malve
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {["home", "about", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(`#${item}`)}
              className="relative group capitalize"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => handleScroll("#contact")}
          className="hidden md:block bg-black text-white px-5 py-2 rounded-full hover:scale-105 transition"
        >
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg px-6 py-4 space-y-4 text-center">
          {["home", "about", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(`#${item}`)}
              className="block w-full text-gray-700 text-lg capitalize"
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => handleScroll("#contact")}
            className="w-full bg-black text-white px-5 py-2 rounded-full"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;