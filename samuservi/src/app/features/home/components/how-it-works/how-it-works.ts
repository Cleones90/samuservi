import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal';

interface Step {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css'
})
export class HowItWorksComponent {
  steps: Step[] = [
    { icon: 'app_registration', title: 'Reserva', description: 'Solicita tu unidad vía WhatsApp o llamada telefónica.' },
    { icon: 'verified_user', title: 'Confirma', description: 'Recibe los datos del conductor y placa asignada.' },
    { icon: 'local_taxi', title: 'Viaja', description: 'Disfruta de un trayecto climatizado y seguro.' },
    { icon: 'location_on', title: 'Llega', description: 'Llega a tu destino y califica nuestro servicio.' }
  ];
}