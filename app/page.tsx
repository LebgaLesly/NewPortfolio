//import components
import Intro from "@/Components/intro";
import SectionDivider from "@/Components/section-divider";
import About from "@/Components/about";
import Projects from "@/Components/projects";
import Skills from "@/Components/skills";
import Experience from "@/Components/experience";
import Contact from "@/Components/contact";
import Footer from "@/Components/footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <Contact /> 
      <Footer />
    </main>
  );
}
