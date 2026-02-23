import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col  items-center justify-center py-20 z-40"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ecom.png"
          title="DressCode"
          link="https://ecomerce-tanishks-projects.vercel.app/"
          description="E-commerce platform built with React, Firebase, and Redux. Features seamless product browsing, cart management, personalized recommendations, and secure checkout for a modern shopping experience."
        />
        <ProjectCard
          src="/portfolio.png"
          title="SeaWolf"
          link="https://deploy-railway-production-11b7.up.railway.app"
          description="Full-stack surf alert platform serving 4000+ users. Built with Flask, PostgreSQL, and WhatsApp API integration for personalized weather-based surfing notifications and automated alerts."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Workouts"
          link="https://github.com/Tanishksoam/Workouts"
          description="Mobile workout tracking app built with React Native, MongoDB, and GraphQL. Enables seamless exercise logging, progress tracking, and personalized fitness management on the go."
        />
      </div>
    </div>
  );
};

export default Projects;
