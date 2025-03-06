import { ClassLevel } from '../enums/class-level';

export interface Class {
  name: string;
  description: string;
  level: ClassLevel;
  imageAlt?: string;
  imageUrl?: string;
  duration?: number;
  instructor?: string;
}
