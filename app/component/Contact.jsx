"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-16"
    >
      <div className="max-w-3xl w-full">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Contact Me
        </h2>

        {/* 🔥 Social Icons */}
        <div className="flex justify-center gap-6 mb-12">

          <button
            onClick={() =>
              window.open("https://wa.me/918956612668", "_blank")
            }
            className="bg-green-500 text-white p-4 rounded-full text-xl shadow-md hover:scale-110 hover:shadow-lg transition"
          >
            <FaWhatsapp />
          </button>

          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/pranavmalve2/", "_blank")
            }
            className="bg-blue-600 text-white p-4 rounded-full text-xl shadow-md hover:scale-110 hover:shadow-lg transition"
          >
            <FaLinkedin />
          </button>

          <button
            onClick={() =>
              window.open("mailto:pranavmalve2@gmail.com", "_blank")
            }
            className="bg-gray-800 text-white p-4 rounded-full text-xl shadow-md hover:scale-110 hover:shadow-lg transition"
          >
            <FaEnvelope />
          </button>

        </div>

        {/* ✅ Success Message */}
        {submitted && (
          <p className="text-green-600 text-center mb-6 font-medium">
            ✅ Message sent successfully!
          </p>
        )}

        {/* 🔥 Form */}
        <form
          action="https://formspree.io/f/mdaygqlj"  // 
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="bg-gray-100 p-8 rounded-2xl shadow-md space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;