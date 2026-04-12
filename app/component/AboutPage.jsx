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
          I'm <span className="font-semibold text-black">Pranav Malve</span>, currently working in the eBooks (EPUB) domain with 1 year of experience.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
          In my role, I review HTML and CSS code to ensure proper 
          <span className="font-semibold"> semantic structure</span>, 
          <span className="font-semibold"> accessibility standards</span>, and 
          <span className="font-semibold"> EPUB guidelines</span>. I focus on maintaining clean and high-quality content.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
          I also have basic knowledge of <span className="font-semibold">Python and SQL</span>, and I'm currently learning more about data handling and programming concepts.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          I'm always eager to learn, improve my skills, and grow in the tech field.
        </p>

      </div>
    </section>
  );
};

export default AboutPage;