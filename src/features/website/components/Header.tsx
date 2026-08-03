import {
  Avatar,
  Card,
  IconButton,
  Typography,
} from "@/shared/ui";

import {
  Download,
  MapPin,
} from "lucide-react";

import { profile } from "../profile.mock";
import { socialIcons } from "../social-icons";

export function Header() {
  return (
    <Card>
      <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:gap-14 md:px-6">
        <div className="flex w-52 justify-center">
          <Avatar />
        </div>

        <div className="flex flex-1 flex-col items-center">
          <Typography
            variant="h1"
            className="mt-2 md:mt-0"
          >
            {profile.name}
          </Typography>

          <Typography
            variant="muted"
            className="mt-2"
          >
            {profile.title}
          </Typography>

          <div className="mt-4 flex items-center justify-center gap-2 text-[var(--muted-foreground)]">
            <MapPin size={18} />

            <Typography variant="body">
              {profile.location}
            </Typography>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {profile.socials.map((social) => (
              <IconButton
                key={social.id}
                href={social.url}
                icon={
                  socialIcons[
                    social.id as keyof typeof socialIcons
                  ]
                }
              >
                {social.label}
              </IconButton>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <IconButton icon={<Download size={18} />}>
              Download CV
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}