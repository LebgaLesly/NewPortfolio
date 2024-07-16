'use client'

//import dependencies
import React from "react";

//import compoenents
import { projectsData } from "@/lib/data";
import useSectionView from "@/hooks/usesectionview";
import SectionHeading from "./section-heading";
import Project from "./project";


const Projects = () => {

  const { ref } = useSectionView("Projects", 0.5)
  
  return (
    <section id='projects' className="scroll-mt-28 sm:mb-60 mb-40" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;


