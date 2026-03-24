import { Component, inject } from '@angular/core';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { ScrollService } from '../../shared/services/scroll.service';

interface Product {
  name: string;
  tagline: string;
  description: string;
  status: 'Beta' | 'Coming Soon' | 'In Development';
  ctaLabel: string;
  features: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private scrollService = inject(ScrollService);

  products: Product[] = [
    {
      name: 'Nirvalink Insights',
      tagline: 'AI-powered analytics for SMBs',
      description:
        `Connect your data sources — spreadsheets, CRMs, databases — and get plain-English ML-generated insights without needing a data science team. Know what's driving your numbers before your competitors do.`,
      status: 'Beta',
      ctaLabel: 'Request Early Access',
      features: ['Natural language queries', 'Automated trend detection', 'Weekly AI summaries', 'No-code setup'],
    },
    {
      name: 'AutoFlow ML',
      tagline: 'Build and deploy ML models without code',
      description:
        'A no-code platform that lets operations and product teams train, evaluate, and deploy machine learning models directly from their data. Designed for businesses that want ML capabilities without hiring a dedicated team.',
      status: 'In Development',
      ctaLabel: 'Join the Waitlist',
      features: ['Drag-and-drop model builder', 'One-click deployment', 'REST API output', 'Built-in explainability'],
    },
  ];

  scrollToContact() {
    this.scrollService.scrollTo('contact');
  }
}
