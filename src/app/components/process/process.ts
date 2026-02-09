import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './process.html',
  styleUrl: './process.scss',
})
export class Process {
  steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We learn about your business, goals, and technical requirements through in-depth consultation.',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    },
    {
      number: 2,
      title: 'Strategy & Planning',
      description: 'We create a detailed roadmap with fixed scope, timeline, and transparent pricing.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    },
    {
      number: 3,
      title: 'Design & Development',
      description: 'Our dedicated team builds iteratively with regular demos and check-ins at every milestone.',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    },
    {
      number: 4,
      title: 'Testing & QA',
      description: 'Rigorous testing ensures everything works flawlessly across all devices and scenarios.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      number: 5,
      title: 'Launch & Support',
      description: 'We deploy your solution and provide ongoing support, monitoring, and optimization.',
      icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    },
  ];
}
