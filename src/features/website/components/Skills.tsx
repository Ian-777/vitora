import {
  Card,
  Section,
  SectionTitle,
  Tag,
} from "@/shared/ui";

import { profile } from "../profile.mock";
import { sectionContent } from "../section-content";

export function Skills() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...sectionContent.skills}
        />

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