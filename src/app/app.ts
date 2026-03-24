import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Products } from './components/products/products';
import { WhyChooseUs } from './components/why-choose-us/why-choose-us';
import { Process } from './components/process/process';
import { TechStack } from './components/tech-stack/tech-stack';
import { Testimonials } from './components/testimonials/testimonials';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Services,
    Products,
    WhyChooseUs,
    Process,
    TechStack,
    Testimonials,
    About,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
