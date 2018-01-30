import { Directive,OnInit, ElementRef,Renderer2,HostListener,HostBinding, Input} from '@angular/core';


@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective {
  
  @Input() defaultColor:string = "transparent";   //customer property binding
  @Input('appBetterHightlight') hightlightColor:string = "blue";

  @HostBinding('style.backgroundColor') backgroundColor:string= this.defaultColor;


  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.hightlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
