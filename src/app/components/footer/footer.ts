import { Component, inject } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private scrollService = inject(ScrollService);

  currentYear = new Date().getFullYear();

  services = [
    'AI & Machine Learning',
    'Software Development',
    'Data Engineering',
    'IT Consulting',
    'Web & Product Design',
  ];

  quickLinks = [
    { label: 'Services', sectionId: 'services' },
    { label: 'Our Process', sectionId: 'process' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
