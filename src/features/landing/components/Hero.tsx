import { Button, Card, Typography } from "@/shared/ui";
import { HeroPreview } from "./HeroPreview";

export function Hero() {
  return (
    <Card className="mx-auto mt-20 max-w-6xl p-12">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Columna izquierda */}
        <div>
          <Typography
            variant="body"
            className="mb-6 font-semibold uppercase tracking-[0.3em] text-[var(--primary)]"
          >
            Vitora
          </Typography>

          <Typography variant="h1">
            Your professional website starts here.
          </Typography>

          <Typography
            variant="muted"
            className="mt-6"
          >
            Create a beautiful personal website in minutes. Share it anywhere,
            impress recruiters and download your CV whenever you need it.
          </Typography>

          <div className="mt-10">
            <Button size="lg">
              Create my page
            </Button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex justify-center">
          <HeroPreview />
        </div>
      </div>
    </Card>
  );
}