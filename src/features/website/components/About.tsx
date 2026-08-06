import {
  Card,
  Section,
  SectionTitle,
  Typography,
} from "@/shared/ui";

import { websiteContent } from "../content/website-content";
import { profile } from "../profile.mock";

export function About() {
  return (
    <Section>
      <Card>
        <SectionTitle
          {...websiteContent.about}
        />

        <Typography variant="body">
          {profile.about}
        </Typography>
      </Card>
    </Section>
  );
}