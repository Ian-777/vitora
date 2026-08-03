import { Card, Typography } from "@/shared/ui";

export function HeroPreview() {
  return (
    <Card className="mt-12 max-w-md mx-auto text-left">
      <Typography variant="h2">
        Ian Fernando
      </Typography>

      <Typography
        variant="muted"
        className="mt-2"
      >
        Full Stack Developer
      </Typography>

      <div className="mt-6">
        <Typography variant="body">
          React • TypeScript • PostgreSQL
        </Typography>
      </div>

      <div className="mt-8">
        <Typography variant="body">
          🚀 Personal Portfolio
        </Typography>

        <Typography variant="body">
          📱 Wetlands App
        </Typography>

        <Typography variant="body">
          💼 CRM Dashboard
        </Typography>
      </div>
    </Card>
  );
}