import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal';

interface ServiceCard {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-carousel',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './services-carousel.html',
  styleUrl: './services-carousel.css'
})
export class ServicesCarouselComponent {
  services: ServiceCard[] = [
    {
      icon: 'business_center',
      iconBg: 'bg-secondary-fixed-dim/20',
      iconColor: 'text-secondary',
      title: 'Taxi Ejecutivo',
      description: 'Vehículos de alta gama para profesionales que buscan confort y discreción.'
    },
    {
      icon: 'diamond',
      iconBg: 'bg-primary-fixed/20',
      iconColor: 'text-primary',
      title: 'Taxi de Lujo',
      description: 'La máxima experiencia en confort con unidades premium y atención VIP.'
    },
    {
      icon: 'package_2',
      iconBg: 'bg-secondary-fixed-dim/20',
      iconColor: 'text-secondary',
      title: 'Traslado de Encomiendas',
      description: 'Envío seguro de tus paquetes y documentos a cualquier punto de la ciudad.'
    },
    {
      icon: 'local_shipping',
      iconBg: 'bg-primary-fixed/20',
      iconColor: 'text-primary',
      title: 'Mudanza Express',
      description: 'Traslados rápidos y eficientes para tus pertenencias pequeñas y medianas.'
    },
    {
      icon: 'family_restroom',
      iconBg: 'bg-primary-fixed/20',
      iconColor: 'text-primary',
      title: 'Familiar',
      description: 'Amplio espacio para toda la familia y equipaje. Seguridad infantil garantizada.'
    }
  ];
}