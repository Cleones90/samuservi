import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { ServicesCarouselComponent } from './components/services-carousel/services-carousel';
import { HowItWorksComponent } from './components/how-it-works/how-it-works';
import { JoinFleetComponent } from './components/join-fleet/join-fleet';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesCarouselComponent, HowItWorksComponent, JoinFleetComponent, ContactComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
