import { Component, HostListener, signal, inject } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private scrollService = inject(ScrollService);

  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Services', sectionId: 'services' },
    { label: 'Process', sectionId: 'process' },
    { label: 'About', sectionId: 'about' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
    this.mobileMenuOpen.set(false);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
