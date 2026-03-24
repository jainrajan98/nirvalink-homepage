import { Component, HostListener, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  private scrollService = inject(ScrollService);
  private observer: IntersectionObserver | null = null;
  private lastScrollY = 0;

  isScrolled    = signal(false);
  isHidden      = signal(false);
  scrollProgress = signal(0);
  activeSection  = signal('hero');
  mobileMenuOpen = signal(false);

  navItems = [
    { label: 'Services', sectionId: 'services' },
    { label: 'Products', sectionId: 'products' },
    { label: 'Process',  sectionId: 'process'  },
    { label: 'About',    sectionId: 'about'    },
    { label: 'Contact',  sectionId: 'contact'  },
  ];

  ngOnInit() {
    const sectionIds = ['hero', ...this.navItems.map(i => i.sectionId)];

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-64px 0px -35% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;

    this.scrollProgress.set(maxY > 0 ? (y / maxY) * 100 : 0);
    this.isScrolled.set(y > 40);

    // Hide when scrolling down past 160px; reveal when scrolling up
    if (y > this.lastScrollY + 4 && y > 160) {
      this.isHidden.set(true);
      this.mobileMenuOpen.set(false);
    } else if (y < this.lastScrollY - 4) {
      this.isHidden.set(false);
    }
    this.lastScrollY = y;
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
    this.mobileMenuOpen.set(false);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }
}
