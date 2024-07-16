//import dependencies
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

//import images
import portfolio from "@/public/Images/portfolio.png";
import quickandeasy from "@/public/Images/QuickAndEasy.png";
import quickmatch from "@/public/Images/QM.png";
import reina from "@/public/Images/Reina.png";
import technet from "@/public/Images/TechNet.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Codecademy",
    location: "E-learning",
    description:
      "I got certified after over 1 year of study. i got certifications in Frontend and Backend Development",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "Frontend Developer",
    location: "Texas",
    description:
      "While pursiung my certifications, i worked as a frontend developer at ProfuseCC",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Douala, Cameroon",
    description:
      "I worked as a software enginner in a company called Hebron Global. Here, I worked both on mobile and web apps",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Frontend Developer",
    location: "South Africa",
    description:
      "I am currently working as a frontend developer at a start-up located in south africa. I build intuitive user interfaces using React and NextJs ",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      " A collection of standout work samples showcasing my skills and expertise in as a Full stack developer. Demonstrates creativity, problem-solving abilities, and quality results",
    tags: ["ReactJs", "TailwindCss", "Aws"],
    imageUrl: portfolio,
  },
  {
    title: "Quick and Easy",
    description:
      "Designed and developed a fully functional e-commerce website using basic HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "Javascript", "Aws"],
    imageUrl: quickandeasy,
  },
  {
    title: "Technet",
    description:
      "Designed and developed a fully functional Full Stack e-commerce website using the MERN stack",
    tags: ["React", "Redux", "ExpreeJs", "Tailwind", "MongoDB", "AWS"],
    imageUrl: technet,
  },
  {
    title: "Quick and Match",
    description: 
      "Designed and developed a matching game  using plain Jvascript, HTML and CSS",
    tags: ["HTML", "CSS", "Javascript", "AWS"],
    imageUrl: quickmatch,
  },
  {
    title: "Reina",
    description:
      "Designed and developed a landing page using basic HTML, CSS, and JavaScript",
    tags: ["HTML", "CSS", "Javascript", "AWS"],
    imageUrl: reina,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Redux",
  "React Native",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "AWS",
  "Framer Motion",
] as const;
