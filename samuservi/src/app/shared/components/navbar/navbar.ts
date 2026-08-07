import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAnimating = false;
  private intervalId: any;

  ngOnInit() {
    // Dispara el efecto del logo cada 10 segundos exactos
    this.intervalId = setInterval(() => {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 1500); // Duración de la animación (1.5 segundos)
    }, 10);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}