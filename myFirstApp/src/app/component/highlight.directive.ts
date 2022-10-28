import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private renderer:Renderer2, private elRef:ElementRef) { }
  ngOnInit() {
    
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue') ; 
    
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black') ;
  }
}
