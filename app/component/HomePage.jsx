'use client'
import React from "react";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-6"
    >
      <div className="text-center max-w-2xl">
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-black">Pranav Malve</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl mb-6">
          Frontend Developer passionate about building clean and modern web experiences.
        </p>

        <button
          onClick={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          View My Work
        </button>

      </div>
    </section>
  );
};

export default HomePage;