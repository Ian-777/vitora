import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

export function Website() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Header />

      <About />

      <Skills />

      <Experience />

      <Projects />
    </main>
  );
}