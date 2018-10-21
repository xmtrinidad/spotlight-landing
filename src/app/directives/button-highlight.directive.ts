import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonHighlight]'
})
export class ButtonHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement, 
      'background-color', '#f7be01');
  }

}
