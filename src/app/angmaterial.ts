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
  MatDialogModule,
  MatSelectModule
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
    MatDialogModule,
    MatSelectModule
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
    MatDialogModule,
    MatSelectModule
  ]
})
 
export class AngMaterialModule { }