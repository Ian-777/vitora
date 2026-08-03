import { Card, Tag, Typography } from "@/shared/ui";
import { profile } from "../profile.mock";

export function Skills() {
  return (
    <Card className="mt-8">
      <Typography variant="h2">
        Skills
      </Typography>

      <div className="mt-6 flex flex-wrap gap-3">
        {profile.skills.map((skill) => (
          <Tag key={skill}>
            {skill}
          </Tag>
        ))}
      </div>
    </Card>
  );
}