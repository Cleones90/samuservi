import { Component } from '@angular/core';
import { RecruitmentFormComponent } from '../recruitment-form/recruitment-form';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-join-fleet',
  standalone: true,
  imports: [RecruitmentFormComponent, ScrollRevealDirective],
  templateUrl: './join-fleet.html',
  styleUrl: './join-fleet.css'
})
export class JoinFleetComponent {}
