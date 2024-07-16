"use client";

//import dependencies
import React from "react";
import { motion } from "framer-motion";

//import components
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import useSectionView from "@/hooks/usesectionview";

const fadeInAnimationVarinats = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

const Skills = () => {
  const { ref } = useSectionView("Skills");

  return (
    <section
      id="skills"
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
    >
      <SectionHeading> My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVarinats}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
