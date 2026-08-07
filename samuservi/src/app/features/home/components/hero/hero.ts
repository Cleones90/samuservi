import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  private readonly whatsappNumber = '593964072527';

  solicitarServicio(): void {
    const message = 'Hola, quiero solicitar un servicio de transporte.';
    window.location.href = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}