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
          title="Ecommerce"
          link="https://ecomerce-tanishks-projects.vercel.app/"
          description="Modern Threads: Elevate your online shopping experience with my dynamic eCommerce website. Seamlessly blending style and technology, it offers intuitive navigation, personalized recommendations, and secure checkout for a modern retail journey"
        />
        <ProjectCard
          src="/nexfin.png"
          title="NexFin"
          link="https://nexfin-two.vercel.app/"
          description="Revolutionize SMEs with an intuitive website, powered by React.js, Redux, Firebase, and Tailwind CSS. Automate payment requests effortlessly, offering small businesses an efficient solution for seamless financial transactions."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Space Themed Website"
          link="#hero"
          description="Embark on a cosmic journey through my portfolio, a Next.js space-themed showcase. Explore stellar design and seamless interactivity as you navigate through my projects, revealing the depths of my skills and creativity in this cosmic odyssey."
        />
      </div>
    </div>
  );
};

export default Projects;
