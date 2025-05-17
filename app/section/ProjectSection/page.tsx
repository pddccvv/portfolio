"use client";

import { motion } from "framer-motion";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    title: "Digital Guest Book",
    description:
      "A face recognition-based guest book system for Balai Besar POM Pontianak.",
    link: "",
    image: "/assets/img/digital-guest-book-screenshot.png",
  },
  {
    title: "School Management System",
    description:
      "A Filament-based admin dashboard to manage student data, subjects, and grades for SMK Negeri 1 Balai - Batang Tarang",
    link: "https://smkn1balai.sch.id",
    embed: "https://smkn1balai.sch.id",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 flex justify-center relative"
      style={{
        backgroundImage: "url('/assets/img/background-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/85 z-0"></div>

      <div className="w-full max-w-screen-xl flex flex-col items-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          <FolderOpen className="inline-block mr-2 text-red-400" size={32} />
          Projects
        </motion.h2>

        <div
          className={`grid gap-10 ${
            projects.length === 1
              ? "grid-cols-1"
              : projects.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                relative 
                bg-white/10 
                backdrop-blur-md 
                border border-white/20 
                rounded-3xl 
                shadow-xl shadow-black/40 
                p-6 
                flex flex-col 
                items-start 
                gap-5 
                transform 
                hover:scale-105 
                hover:shadow-2xl hover:shadow-red-400/50 
                transition-all 
                duration-300 
                w-full max-w-md
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>

              {project.image && (
                <div className="relative w-full max-h-96 overflow-y-auto cursor-pointer transition-transform duration-300 rounded-lg">
                  <img
                    src={project.image}
                    alt="Project Screenshot"
                    className="w-full object-contain rounded-lg"
                  />
                </div>
              )}

              {project.embed && (
                <div className="relative w-full h-96 overflow-hidden rounded-2xl">
                  <iframe
                    src={project.embed}
                    title={project.title}
                    className="w-full h-full border-none rounded-2xl"
                  ></iframe>
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-red-400 hover:text-red-300 transition-colors font-medium"
                >
                  View Project →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
