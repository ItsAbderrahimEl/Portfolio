import type {ApplicationCategory} from '@/types/ApplicationCategory';

export interface Project {
    id: number;
    url: string;
    name: string;
    pattern: string;
    description: string;
    applicationCategory: ApplicationCategory;
}