import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener
} from '@angular/core';

interface Particle {
  x: number;
  y: number;
  r: number;
  d: number;
  speed: number;
}

@Component({
  selector: 'app-snow-effect',
  standalone: true,
  imports: [],
  templateUrl: './snow-effect.html',
  styleUrl: './snow-effect.css'
})
export class SnowEffectComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private readonly maxParticles = 100;
  private animationFrameId?: number;

  get isSnowSeason(): boolean {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return month === 12 || (month === 1 && day <= 5);
  }

  ngAfterViewInit(): void {
    if (!this.isSnowSeason) {
      return;
    }
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.isSnowSeason) {
      this.resizeCanvas();
    }
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() * this.maxParticles,
        speed: Math.random() * 2 + 1
      });
    }
  }

  private draw(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.ctx.beginPath();
    for (const p of this.particles) {
      this.ctx.moveTo(p.x, p.y);
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    this.ctx.fill();
    this.update();
  }

  private update(): void {
    const canvas = this.canvasRef.nativeElement;
    this.particles = this.particles.map(p => {
      const newY = p.y + p.speed;
      const newX = p.x + Math.sin(p.d / 10);
      if (newY > canvas.height) {
        return { x: Math.random() * canvas.width, y: -10, r: p.r, d: p.d, speed: p.speed };
      }
      return { ...p, x: newX, y: newY };
    });
  }

  private animate = (): void => {
    this.draw();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}