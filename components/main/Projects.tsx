import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ecom.png"
          title="Dress Code"
          description="Modern Threads: Elevate your online shopping experience with my dynamic eCommerce website. Seamlessly blending style and technology, it offers intuitive navigation, personalized recommendations, and secure checkout for a modern retail journey"
        />
        <ProjectCard
          src="/nexfin.png"
          title="Interactive Website Cards"
          description="Revolutionize SMEs with an intuitive website, powered by React.js, Redux, Firebase, and Tailwind CSS. Automate payment requests effortlessly, offering small businesses an efficient solution for seamless financial transactions."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Explore the cosmos of my portfolio, a space-themed showcase crafted with Next.js. Navigating through stellar design and seamless interactivity, it's a cosmic journey into my skills and projects"
        />
      </div>
    </div>
  );
};

export default Projects;
