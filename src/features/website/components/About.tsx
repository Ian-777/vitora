import { Card, Typography } from "@/shared/ui";
import { profile } from "../profile.mock";

export function About() {
  return (
    <Card className="mt-8">
      <Typography variant="h2">
        About
      </Typography>

      <Typography
        variant="body"
        className="mt-4"
      >
        {profile.about}
      </Typography>
    </Card>
  );
}