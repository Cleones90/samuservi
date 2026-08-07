import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const hiddenClasses = ['opacity-0', 'translate-y-10'];
    const baseClasses = ['transition-all', 'duration-700'];

    const reveal = () => {
      hiddenClasses.forEach(c => this.renderer.removeClass(this.el.nativeElement, c));
      this.renderer.addClass(this.el.nativeElement, 'opacity-100');
      this.renderer.addClass(this.el.nativeElement, 'translate-y-0');
    };

    [...baseClasses, ...hiddenClasses].forEach(c =>
      this.renderer.addClass(this.el.nativeElement, c)
    );

    // If IntersectionObserver is not supported, show content immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setTimeout(reveal, 50);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal();
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);

    // Safety fallback: never leave content hidden.
    setTimeout(reveal, 3000);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
