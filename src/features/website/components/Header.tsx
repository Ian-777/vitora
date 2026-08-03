import {
  Avatar,
  IconButton,
  Card,
  Typography,
} from "@/shared/ui";

import {
  Globe,
  MapPin,
} from "lucide-react";

import { profile } from "../profile.mock";

export function Header() {
  return (
    <Card className="flex flex-col items-center text-center">
      <Avatar />

      <Typography
        variant="h1"
        className="mt-6"
      >
        {profile.name}
      </Typography>

      <Typography
        variant="muted"
        className="mt-2"
      >
        {profile.title}
      </Typography>

      <div className="mt-4 flex items-center gap-2 text-[var(--muted-foreground)]">
        <MapPin size={18} />

        <Typography variant="body">
          {profile.location}
        </Typography>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        
        <IconButton 
         /* icon={<GitHub size={18} />}
        >
          GitHub
        </IconButton>

        <IconButton
          icon={<Linkedin size={18} />}
        >
          LinkedIn
        </IconButton> 

        <IconButton */
          icon={<Globe size={18} />}
        >
          Website
        </IconButton>
      </div>
    </Card>
  );
}