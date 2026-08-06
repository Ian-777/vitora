import {
  Card,
  Section,
  SectionTitle,
} from "@/shared/ui";

import { websiteContent } from "../../content/website-content";
import { profile } from "../../profile.mock";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...websiteContent.experience}
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