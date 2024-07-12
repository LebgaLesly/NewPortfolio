'use client'

//import dependencies
import React from "react";

//import compoenents
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from './project';
import useSectionView from "@/hooks/usesectionview";


const Projects = () => {

  const { ref } = useSectionView("Projects", 0.5)
  
  return (
    <section id='projects' className="scroll-mt-28" ref={ref}>
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


