import {
  Card,
  Section,
  SectionTitle,
  Tag,
} from "@/shared/ui";

import { websiteContent } from "../content/website-content";
import { profile } from "../profile.mock";

export function Skills() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...websiteContent.skills}
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