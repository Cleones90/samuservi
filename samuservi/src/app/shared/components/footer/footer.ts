import { Component, OnInit } from '@angular/core';
import { VisitorCounterService } from '../../../core/services/visitor-counter';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent implements OnInit {
  visitorCount = 0;

  constructor(private visitorCounterService: VisitorCounterService) {}

  ngOnInit(): void {
    this.visitorCount = this.visitorCounterService.getCount();
  }
}
