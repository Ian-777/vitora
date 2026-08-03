//import { Hero } from "@/features/landing/components/Hero";
import { Container } from "@/shared/ui";
import { Website } from "./features/website/Website";

function App() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Container>
        <Website />
      </Container>
    </main>
  );
}

export default App;