import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { Services } from "@/components/Services";
import { Approach } from "@/components/Approach";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid
        showFilters={false}
        limit={6}
        excludeIds={["mobilya-tasarim"]}
      />
      <Services />
      <Approach />
      <About />
      <Contact />
    </>
  );
}
