import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule
  ]
})
 
export class AngMaterialModule { }