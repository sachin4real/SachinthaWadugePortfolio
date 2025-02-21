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
          src="/customizepage.png"
          title="DreamFit.lk-Virtual dressing Room"
          description="DreamFit.LK is a next-generation e-commerce platform that allows users to customize their clothing in real-time using an interactive 3D model. "
        />
        <ProjectCard
          src="/Helasuwa.png"
          title="Helasuwa.lk"
          description="Helasuwa.lk is a comprehensive hospital management system built to streamline administrative, medical, and patient management processes."
        />
        <ProjectCard
          src="/KindHearts.png"
          title="Space Themed Website"
          description="KindHearts is a mobile application designed to connect users with donation programs , volunteering opportunities , and education resources, empowering communities and making it easy to lend a helping hand."
        />
      </div>
    </div>
  );
};

export default Projects;
