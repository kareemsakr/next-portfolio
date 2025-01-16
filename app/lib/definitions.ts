export interface Project {
  title: string;
  subtitle: string;
  techStack: string[];
  overview: string;
  challenges: string[];
  features: string[];
  technical: string[];
  ux: string[];
  impact?: string[]; // Optional as not all projects may have impact metrics yet
  status?: string[]; // Optional for projects in development
  future?: string[]; // Optional future plans
}
