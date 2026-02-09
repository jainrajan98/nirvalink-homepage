import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface TechCategory {
  name: string;
  technologies: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {
  categories: TechCategory[] = [
    {
      name: 'Frontend',
      technologies: ['Angular', 'React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'GraphQL'],
    },
    {
      name: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      name: 'Data & Mobile',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Flutter', 'React Native', 'Firebase'],
    },
  ];
}
