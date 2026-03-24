import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {}
