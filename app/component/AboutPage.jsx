"use client";
import React from "react";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white px-6"
    >
      <div className="max-w-4xl text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          About Me
        </h2>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
          I'm <span className="font-semibold text-black">Pranav Malve</span>, a passionate
          frontend developer who loves building modern, responsive, and user-friendly web applications.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
          I specialize in React, Tailwind CSS, and creating smooth user experiences.
          I'm always eager to learn new technologies and improve my skills.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          When I'm not coding, I enjoy exploring new ideas, improving UI designs,
          and working on personal projects.
        </p>

      </div>
    </section>
  );
};

export default AboutPage;