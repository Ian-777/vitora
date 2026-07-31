import { Button, Card, Container, Section, Typography } from "@/shared/ui";

function App() {
  return (
    <main className="bg-[var(--background)] min-h-screen">
      <Container>
        <Section>
          <Card className="text-center">
            <Typography variant="h1">Welcome to Vitora 💜</Typography>

            <Typography variant="muted" className="mt-4">
              Build your professional presence.
            </Typography>

            <div className="mt-8">
              <Button loading>Create my profile</Button>
            </div>
          </Card>
        </Section>
      </Container>
    </main>
  );
}

export default App;
