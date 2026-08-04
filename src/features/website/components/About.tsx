import {
  Card,
  Section,
  SectionTitle,
  Typography,
} from "@/shared/ui";

import { profile } from "../profile.mock";
import { sectionContent } from "../section-content";

export function About() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...sectionContent.about}
        />

        <Typography variant="body">
          {profile.about}
        </Typography>
      </Card>
    </Section>
  );
}