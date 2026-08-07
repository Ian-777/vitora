import { About } from "./components/About";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";

import { Education } from "./components/education";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";

export function Website() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Header />

      <About />

      <Skills />

      <Experience />

      <Education />

      <Projects />
    </main>
  );
}