import type { Skill } from '@/types/Skill';

export interface Field {
    id: number;
    name: string;
    description: string;
    skills: Skill[];
}
