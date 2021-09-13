import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import tippy from 'tippy.js';
@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit {
@Input() toolTip:string='';
  constructor(private ElRef: ElementRef) { }
ngAfterViewInit(){
  tippy(this.ElRef.nativeElement,{
    content:this.toolTip
  })
}
}
