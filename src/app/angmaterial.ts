import {
  MatButtonModule,
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
 
export class AngMaterialModule { }