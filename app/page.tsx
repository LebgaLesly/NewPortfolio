//import components
import Intro from "@/Components/intro";
import SectionDivider from "@/Components/section-divider";
import About from "@/Components/about";
import Projects from "@/Components/projects";
import Skills from "@/Components/skills";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4 h-[1000vh]">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </main>
  );
}
