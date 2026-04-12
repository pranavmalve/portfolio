"use client";
import React from "react";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white px-6"
    >
      <div className="max-w-4xl text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-600 text-lg mb-6">
          I'm <span className="font-semibold">Pranav Malve</span>, a frontend developer
          passionate about building modern web apps.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          I specialize in React, Tailwind CSS, and clean UI design.
        </p>

        <p className="text-gray-600 text-lg">
          I love turning ideas into beautiful, functional websites.
        </p>

      </div>
    </section>
  );
};

export default AboutPage;