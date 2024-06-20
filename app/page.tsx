//import components
import Intro from '@/Components/intro'
import SectionDivider from '@/Components/section-divider'
import About from "@/Components/about"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  )
}
