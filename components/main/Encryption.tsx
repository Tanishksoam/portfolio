"use client";
import React from "react";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const experiences = [
  {
    company: "Foosh.ai",
    role: "Software Developer Intern",
    period: "July 2025 - Present",
    location: "Remote",
    description: [
      "Implemented integration of new AI models into image and video generation platform",
      "Designed frontend components using Next.js, React, and Tailwind CSS",
      "Tested and optimized end-to-end flows for stability and performance",
    ],
    link: "https://www.foosh.ai",
  },
  {
    company: "CITI Groups",
    role: "Tech Intern",
    period: "June 2025 - July 2025",
    location: "Pune",
    description: [
      "Migrated 200+ repositories from Bitbucket to GitHub Enterprise",
      "Built enterprise CI/CD pipeline reducing deployment time by 75%",
      "Developed custom NuGet configurations for .NET Framework projects",
    ],
  },
  {
    company: "SeaWolf",
    role: "Software Engineer",
    period: "March 2025 - May 2025",
    location: "Remote",
    description: [
      "Architected full-stack surf alert platform for 4000+ target users",
      "Built scalable Flask backend with PostgreSQL and WhatsApp API integration",
      "Reduced manual surf checks by 80% with automated weather processing",
    ],
    link: "https://deploy-railway-production-11b7.up.railway.app",
  },
  {
    company: "Mission Healthy Bharat",
    role: "FullStack Developer",
    period: "Jan 2025 - Mar 2025",
    location: "Remote",
    description: [
      "Developed full-stack event website catering to 2000+ users",
      "Integrated Razorpay payment gateway for event ticket purchases",
      "Built admin dashboard with Firebase Authentication",
    ],
    link: "https://mhbofficial.org/",
  },
  {
    company: "Novacom",
    role: "Frontend Developer",
    period: "July 2024 - Oct 2024",
    location: "Remote",
    description: [
      "Developed Next.js web application serving 150+ clients",
      "Achieved 20% increase in user engagement with responsive designs",
      "Utilized Zustand for state management across 30+ UI components",
    ],
    link: "https://app.novacomsummits.com/nominate",
  },
];

const Encryption = () => {
  return (
    <div className="w-screen h-auto flex flex-col gap-10 relative items-center justify-center overflow-hidden py-20">
      <div className="w-full h-auto mb-8 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl sm:text-[40px] font-medium text-center text-gray-200"
        >
          Professional
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Experience
          </span>
        </motion.div>
      </div>

      <div className="relative w-full max-w-4xl px-4 sm:px-10">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 transform sm:-translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? slideInFromLeft(0.3 * index) : slideInFromRight(0.3 * index)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`relative flex flex-col sm:flex-row w-full mb-8 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 mt-6 z-10 border-2 border-white" />

            {/* Content card */}
            <div
              className={`ml-10 sm:ml-0 w-full sm:w-[45%] p-6 rounded-2xl border border-gray-700 bg-gray-900 bg-opacity-50 backdrop-blur-sm hover:border-purple-500 transition-all duration-300 ${
                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl sm:text-2xl font-bold text-white hover:text-purple-400 transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                  )}
                  <span className="text-xs sm:text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {exp.location}
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {exp.role}
                </h4>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <ul className="mt-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">&#8226;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8">
        <div className="cursive text-xl sm:text-3xl font-medium text-center text-gray-300">
          &quot;Turning ideas into production-ready solutions.&quot;
        </div>
      </div>
    </div>
  );
};

export default Encryption;
