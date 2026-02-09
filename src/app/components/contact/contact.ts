import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  submissionState = signal<'idle' | 'submitting' | 'success' | 'error'>('idle');

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    service: ['general'],
    message: ['', Validators.required],
  });

  serviceOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'it-solutions', label: 'IT Solutions' },
    { value: 'web-design', label: 'Web & App Design' },
    { value: 'software-dev', label: 'Software Development' },
    { value: 'consulting', label: 'Business Consulting' },
    { value: 'financial', label: 'Financial Services' },
  ];

  contactInfo = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'Email',
      value: 'rajan.jain@nirvalink.com',
      href: 'mailto:rajan.jain@nirvalink.com',
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      label: 'Phone',
      value: '+91 9727511048',
      href: 'tel:+919727511048',
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Location',
      value: 'Ahmedabad, India',
      href: '',
    },
  ];

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submissionState.set('submitting');

    this.http.post('https://formspree.io/f/mdkwyzwd', this.contactForm.value, {
      headers: { 'Accept': 'application/json' },
    }).subscribe({
      next: () => {
        this.submissionState.set('success');
        this.contactForm.reset({ service: 'general' });
      },
      error: () => {
        this.submissionState.set('error');
      },
    });
  }

  resetForm() {
    this.submissionState.set('idle');
  }
}
