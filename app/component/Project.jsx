"use client";
import React from "react";

const Project = () => {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Python",
    "SQL",
    "Excel",
    "Web Scraping",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio built using React and Tailwind.",
      skills: ["React", "JS", "Tailwind"],
      image: "https://via.placeholder.com/300",
      href: "https://www.amazon.com",
    },
    {
      title: "Todo App",
      desc: "A simple todo app with add/delete functionality.",
      skills: ["React", "JS"],
      image: "https://via.placeholder.com/300",
      href: "https://github.com/pranavmalve/Amazon-Delivery-Analysis",
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather data using API.",
      skills: ["React", "API"],
      image: "https://via.placeholder.com/300",
      href: "https://github.com/pranavmalve/Amazon-Laptop-Scraper",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          My Work
        </h2>

        {/* 🔹 Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-2 bg-white rounded-full shadow hover:shadow-lg transition text-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition"
              >
                {/* Image */}
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-40 object-cover"
                />

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-xl font-bold mb-2">
                    {proj.title}
                  </h4>

                  <p className="text-gray-600 mb-3">
                    {proj.desc}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-200 px-2 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => window.open(proj.href, "_blank")}
                    className="text-black font-medium hover:underline"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Project;