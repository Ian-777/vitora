import { Card, Section, Tag, Typography } from "@/shared/ui";

import { profile } from "../profile.mock";

export function Skills() {
  return (
    <Section>
      <Card>
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
    </Section>
  );
}