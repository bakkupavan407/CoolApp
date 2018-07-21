import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'complaints', component: ComplaintComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'admin', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ComplaintComponent,
    LandingComponent,
    AdminDashboardComponent,
    SiteNavComponent,
    DialogBodyComponent,
    LoginComponent
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
      ReactiveFormsModule
  ],
  providers: [
    ComplaintService,
    HttpErrorHandler,
    MessageService,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
