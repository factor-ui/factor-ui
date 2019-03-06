import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ftRipple]'
})
export class RippleDirective {
  x: number;
  y: number;
  size: number;
  offsets: any;

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  showRipple(event) {

    let element = this.elementRef.nativeElement;
    let ripple = element.querySelector('.ripple');
    const eventType = event.type;
    // Ripple
    if (ripple === null) {
      // Create ripple
      ripple = document.createElement('span');
      ripple.classList.add('ripple');

      // Prepend ripple to element
      element.insertBefore(ripple, element.firstChild);

      // Set ripple this.size
      if (!ripple.offsetHeight && !ripple.offsetWidth) {
        this.size = Math.max(element.offsetWidth, element.offsetHeight);
        ripple.style.width = this.size + 'px';
        ripple.style.height = this.size + 'px';
      }
    }

    // Remove animation effect
    ripple.className = ripple.className.replace(/ ?(ripple-animate)/g, '');

    // get click coordinates by event type
    if (eventType === 'mousedown') {
      this.x = event.pageX;
      this.y = event.pageY;
    } else if (eventType === 'touchstart') {
      try {
        let originalEvent;
        if (typeof event.changedTouches !== 'undefined') {
          originalEvent = event.changedTouches[0];
        } else {
          originalEvent = event.originalEvent;
        }
        this.x = originalEvent.pageX;
        this.y = originalEvent.pageY;
      } catch (e) {
        // fall back to center of el
        this.x = ripple.offsetWidth / 2;
        this.y = ripple.offsetHeight / 2;
      }
    }
    this.offsets = this.getPosition(element);
    ripple.style.left = (this.x - this.offsets.left - this.size / 2) + 'px';
    ripple.style.top = (this.y - this.offsets.top - this.size / 2) + 'px';

    // Add animation effect
    ripple.classList.add('ripple-animate');
  }
  getPosition(element) {
    const de = document.documentElement;
    const box = element.getBoundingClientRect();
    const top = box.top + window.pageYOffset - de.clientTop;
    const left = box.left + window.pageXOffset - de.clientLeft;
    return { top: top, left: left };
  }
}
