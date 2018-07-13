import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ComplaintComponent } from './complaints/complaint.component';
import { ComplaintService } from './complaints/complaint.service';

import { HttpErrorHandler } from './http-error-handler.service';

import { MessageService } from './message.service';
import { MessagesComponent }    from './messages/messages.component';

import { LandingComponent } from './landing/landing.component';
import { AngMaterialModule } from './angmaterial';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'complaints', component: ComplaintComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    LandingComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpModule,
      AngMaterialModule,
      RouterModule.forRoot(routes)
  ],
  providers: [
    ComplaintService,
    HttpErrorHandler,
    MessageService,
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
