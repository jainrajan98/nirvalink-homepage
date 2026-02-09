import { Component, inject } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private scrollService = inject(ScrollService);

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
