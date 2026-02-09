import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
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
      icon: 'M5 12h14M12 5v14M4 4l16 16',
      title: 'IT Solutions',
      description: 'Comprehensive IT strategy, infrastructure management, and cloud solutions to keep your business running efficiently and securely.',
    },
    {
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Web & App Design',
      description: 'Modern, responsive web and application design that delivers exceptional user experiences and drives engagement.',
    },
    {
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies to automate processes and accelerate digital transformation.',
    },
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Business Consulting',
      description: 'Strategic expertise to help you navigate digital transformation, optimize operations, and drive sustainable business growth.',
    },
    {
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      title: 'Financial Services',
      description: 'Technology-driven financial solutions including fintech integrations, payment systems, and financial data analytics.',
    },
  ];
}
