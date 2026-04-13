"use client";
import React from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-pink-100 px-6"
    >
      <div className="text-center max-w-3xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Pranav Malve
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-lg md:text-xl mb-8"
        >
          Passionate about learning new things, improving my skills, and growing in the tech field.
        </motion.p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            View Work
          </button>

          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="border px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default HomePage;