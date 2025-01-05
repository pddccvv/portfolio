"use client";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Membantu membangun aplikasi web responsif dan dinamis dengan teknologi terbaru seperti React, Next.js, dan Laravel.",
    },
    {
      title: "UI/UX Design",
      description:
        "Desain antarmuka pengguna yang menarik dan pengalaman pengguna yang efisien, memastikan aplikasi Anda mudah digunakan dan estetis.",
    },
    {
      title: "Backend Development",
      description:
        "Pengembangan sistem backend yang kuat menggunakan Node.js, Flask, atau Laravel untuk membangun API yang cepat dan aman.",
    },
    {
      title: "Frontend Development",
      description:
        "Pengembangan frontend menggunakan teknologi terbaru seperti React JS, Tailwind CSS, dan Next.js untuk menciptakan antarmuka pengguna yang modern dan responsif.",
    },
    {
      title: "Mobile App Development",
      description:
        "Membangun aplikasi mobile menggunakan framework seperti React Native untuk pengalaman pengguna yang konsisten di iOS dan Android.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Perbaiki tipe state

  return (
    <div className="bg-black text-white py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10">
        Services
      </h1>
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <li
              key={index}
              className="relative group bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-red-600 transition-transform duration-300"
              onMouseEnter={() => setHoveredIndex(index)} // Set hovered index to number
              onMouseLeave={() => setHoveredIndex(null)} // Set to null on mouse leave
              style={{
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h2 className="text-xl font-bold">{service.title}</h2>
                </div>
              </div>
              <p className="mt-4 text-gray-200 group-hover:text-white transition-colors duration-300">
                {service.description}
              </p>
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-sm px-6 text-center">
                  Contact me for more details.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
