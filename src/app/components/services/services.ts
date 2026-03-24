import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: ServiceItem[] = [
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'AI & Machine Learning',
      description: 'Custom ML models, predictive analytics, and intelligent automation. We help you turn raw data into decisions.',
      tag: 'Core Focus',
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      title: 'Software Development',
      description: 'Full-stack web and mobile applications built with modern frameworks. Scalable architecture, clean code, shipped on time.',
      tag: 'Services',
    },
    {
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4',
      title: 'Data Engineering',
      description: 'End-to-end data pipelines, warehousing, and analytics infrastructure. Get your data ready for AI before AI is ready for you.',
      tag: 'Services',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'IT & Cloud Consulting',
      description: 'Infrastructure strategy, cloud migrations, and architecture reviews. Reduce costs, improve reliability, scale with confidence.',
      tag: 'Services',
    },
    {
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      title: 'Web & Product Design',
      description: 'Clean, conversion-focused interfaces built for modern users. From wireframes to production-ready design systems.',
      tag: 'Services',
    },
  ];
}
