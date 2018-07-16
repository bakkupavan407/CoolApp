import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SiteNavComponent } from './site-nav/site-nav.component';

const routes: Routes = [
  { path: '', component: ComplaintComponent },
  { path: 'complaints', component: ComplaintComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    LandingComponent,
    AdminDashboardComponent,
    SiteNavComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      HttpModule,
      AngMaterialModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(routes),
      LayoutModule,
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
