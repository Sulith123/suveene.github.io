import React from "react";
import ProjectCard from "../../projects-card";

const ProjectsSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3  my-8 flex">
        <p id="projects" className="mx-auto justify-center p-3 underline">
          PROJECTS
        </p>
      </div>
      <div className="grid lg:w-[70%] grid-cols-1 lg:grid-cols-1 lg:mx-auto lg:gap-5 gap-3 items-center">
        
        <ProjectCard
          name="AI See"
          image="/AIsee.jpg"
          description="AI See is an affordable wearable assistive device that helps people with visual impairment ‘see’ objects around them with the help of artificial intelligence (AI)."
          period="2024"
          url="https://ahlab.org/project/aisee/"
        />
        <ProjectCard
          name="Bera Tiles"
          image="/beratiles.jpg"
          description="Bera Tiles is a mobile app that gamifies the essence of Sri Lankan traditional drums. The app features digital renditions of over 6 Sri Lankan traditional drums, coupled with a reflex-testing game akin to Piano Tiles."
          period="2022"
          url="https://play.google.com/store/apps/details?id=com.suveen.bera_tiles_1"
        />
        {/*<ProjectCard
          name="Bera Tiles"
          image="/beratiles.jpg"
          description="Bera Tiles is a mobile app that gamifies the essence of Sri Lankan traditional drums. The app features digital renditions of over 6 Sri Lankan traditional drums, coupled with a reflex-testing game akin to Piano Tiles."
          period="2022"
          url="https://play.google.com/store/apps/details?id=com.suveen.bera_tiles_1"
        /> */}
      </div>
    </>
  );
};

export default ProjectsSection;
