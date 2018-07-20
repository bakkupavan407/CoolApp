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
  MatListModule,
  MatDialogModule
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
    MatListModule,
    MatDialogModule
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
    MatListModule,
    MatDialogModule
  ]
})
 
export class AngMaterialModule { }