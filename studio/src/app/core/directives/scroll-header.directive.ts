import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollHeader]'
})
export class ScrollHeaderDirective {
  private isHeaderHidden = false;
  private prevScrollpos = window.scrollY;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > this.prevScrollpos) {
      // Scrolling hacia abajo
      if (!this.isHeaderHidden) {
        this.renderer.addClass(this.el.nativeElement, 'hidden');
        this.isHeaderHidden = true;
      }
    } else {
      // Scrolling hacia arriba
      if (this.isHeaderHidden) {
        this.renderer.removeClass(this.el.nativeElement, 'hidden');
        this.isHeaderHidden = false;
      }
      this.prevScrollpos = currentScrollPos;
    }
  }

}
