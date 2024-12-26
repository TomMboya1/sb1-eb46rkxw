import { Camera, Film, Video, Edit, Image, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Film,
    title: "Documentary Production",
    description: "Full-scale documentary production from concept to screen"
  },
  {
    icon: Video,
    title: "Film Production",
    description: "Creative storytelling through cinematic excellence"
  },
  {
    icon: Camera,
    title: "Cinematography",
    description: "Expert camera work and visual storytelling"
  },
  {
    icon: Edit,
    title: "Post Production",
    description: "Professional editing, color grading, and sound design"
  },
  {
    icon: Image,
    title: "Photography",
    description: "Professional photography for events, portraits, and commercial projects"
  },
  {
    icon: Palette,
    title: "Animation",
    description: "2D and 3D animation for films, commercials, and digital content"
  }
];