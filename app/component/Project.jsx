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
      image: "/portfolioWebsite.png",
      href: "https://www.amazon.com",
    },
    {
      title: "Todo App",
      desc: "A simple todo app with add/delete functionality.",
      skills: ["React", "JS" ,"Tailwind"],
      image: "/todo.png",
      href: "https://todo-list-zeta-azure-32.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather data using API.",
      skills: ["React", "API"],
      image: "https://via.placeholder.com/400",
      href: "https://github.com/pranavmalve/Amazon-Laptop-Scraper",
    },
    {
      title: "Amazon Laptop Scraper",
      desc: "Python + Selenium scraper to extract laptop data from Amazon.",
      skills: ["Python", "Selenium" , "Web Scrapping"],
      image: "/amazon_project.png",
      href: "https://github.com/pranavmalve/Amazon-Laptop-Scraper",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          My Work
        </h2>

        {/* 🔹 Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 shadow-md text-sm font-medium hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 🔹 Projects */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  {proj.title}
                </h4>

                <p className="text-gray-600 mb-4 text-sm">
                  {proj.desc}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-r from-purple-200 to-pink-200 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button
                  onClick={() => window.open(proj.href, "_blank")}
                  className="w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;