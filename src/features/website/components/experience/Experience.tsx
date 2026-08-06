import {
  Card,
  Section,
  SectionTitle,
} from "@/shared/ui";

import { profile } from "../../profile.mock";
import { sectionContent } from "../../section-content";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...sectionContent.experience}
        />

        <div className="mt-8 space-y-10">
          {profile.experience.map((experience, index) => (
            <ExperienceItem
              key={`${experience.company}-${index}`}
              experience={experience}
              isLast={
                index === profile.experience.length - 1
              }
            />
          ))}
        </div>
      </Card>
    </Section>
  );
}