import {
  Card,
  Section,
  SectionTitle,
} from "@/shared/ui";

import { websiteContent } from "../../content/website-content";
import { profile } from "../../profile.mock";

import { EducationItem } from "./EducationItem";

export function Education() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...websiteContent.education}
        />

        <div className="mt-8 space-y-10">
          {profile.education.map(
            (education, index) => (
              <EducationItem
                key={`${education.institution}-${index}`}
                education={education}
                isLast={
                  index ===
                  profile.education.length - 1
                }
              />
            )
          )}
        </div>
      </Card>
    </Section>
  );
}