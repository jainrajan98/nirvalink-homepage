import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      quote: 'Nirvalink transformed our outdated systems into a streamlined digital platform. Their team delivered on time and the results exceeded our expectations.',
      authorName: 'Arjun Mehta',
      authorRole: 'CTO',
      company: 'TechVista Solutions',
      initials: 'AM',
    },
    {
      quote: 'The transparency in pricing and the direct access to senior developers made all the difference. We finally found a consulting partner we can trust.',
      authorName: 'Priya Sharma',
      authorRole: 'Founder',
      company: 'GreenLeaf Innovations',
      initials: 'PS',
    },
    {
      quote: 'From strategy to deployment, the Nirvalink team demonstrated exceptional technical skill and a genuine understanding of our business challenges.',
      authorName: 'Rahul Desai',
      authorRole: 'VP of Engineering',
      company: 'FinCore Systems',
      initials: 'RD',
    },
  ];
}
