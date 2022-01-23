import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open = false;
  
  @HostListener('click') openToggle(){
    this.open = !this.open;
  }
  
  constructor() { }

}
