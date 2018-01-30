import { Directive,OnInit, ElementRef,Renderer2,HostListener } from '@angular/core';


@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective {



  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
