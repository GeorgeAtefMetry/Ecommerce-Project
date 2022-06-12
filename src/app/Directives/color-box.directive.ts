import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorBox]'
})
export class ColorBoxDirective {

  borderColor:string = "red"
  shadow:string="#0000008a"
  constructor(private elem:ElementRef) {
      elem.nativeElement.style.border=`3px solid ${this.borderColor}`
      elem.nativeElement.style.boxShadow =` 7px 9px 13px 0px ${this.shadow}`
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.elem.nativeElement.style.boxShadow  = `13px 12px 13px 7px ${this.shadow}`
  }
  @HostListener('mouseout') onMouseOut(){
    this.elem.nativeElement.style.boxShadow  =` 7px 9px 13px 0px ${this.shadow}`
  }
}
