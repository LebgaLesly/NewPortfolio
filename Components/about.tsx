"use client";

//import dependencies
import React from "react";
import { motion } from "framer-motion";

//import components
import SectionHeading from "./section-heading";



const About = () => {
  return (
      <motion.section 
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        After obtaining an Associate Degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in an E-learning platform called CodeCademy and learned{" "}
        <span className="font-medium">Full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          ReactJs, NextJs, NodeJs, ExpressJs, PostgreSql and MongoDB
        </span>
        . I am also familiar with TypeScript, Firebase and AWS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you can find me exploring new technologies, brainstorming creative projects and i also love {" "}
        <span className="font-medium">playing video games</span>. I'm always eager to connect with fellow tech enthusiasts and collaborate {" "}
        <span className="font-medium">on exciting projects {" "}</span>that push the boundaries of what's possible
      </p>
      </motion.section>
  )
}

export default About