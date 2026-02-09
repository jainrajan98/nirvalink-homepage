import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  private platformId = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  @Input() threshold = 0.1;

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.el.nativeElement.classList.add('animate-hidden');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate-visible');
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: this.threshold }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
