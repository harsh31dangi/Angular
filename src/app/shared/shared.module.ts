import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DropdownDirective } from './dropdown.directive';


@NgModule({
  declarations: [
    SpinnerComponent,
    AlertComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    AlertComponent,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule { }
