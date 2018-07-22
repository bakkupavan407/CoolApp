import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

import { Complaint } from '../complaints/complaint';
import { ComplaintService } from '../complaints/complaint.service';
import * as _ from "lodash";

import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  providers: [ComplaintService],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  complaints: Complaint[];
  complaintsData: Complaint[];
  manageComplaints: Complaint;
  currentDate: string;

  constructor(private breakpointObserver: BreakpointObserver,
    private complaintService: ComplaintService,
    public dialog: MatDialog,
    public router: Router) { }

  ngOnInit() {
    //this.getComps();
    const isLoggedIn = localStorage.getItem("admin");

    if(!isLoggedIn) {
      this.router.navigate(['/admin']);
    }

    this.currentDate = new Date().toDateString();
    this.complaints = [{
      "id": 1,
      "name": "pavan",
      "email": "pk@gmail.com",
      "mobile": 7777777777,
      "reqsub": "No Footpaths",
      "reqmessage": "Please take action as early as possible",
      "reqstatus": "completed",
      "date": "Thu Jul 19 2018",
      "admincoms": "we have ordered concerned department and they have taken action."
    }, {
      "id": 2,
      "name": "Srikanth",
      "email": "megastar@gmail.com",
      "mobile": 4444444444,
      "reqsub": "Tea point is not available",
      "reqmessage": "Please take action as early as possible",
      "reqstatus": "InProgress",
      "date": "Thu Jul 19 2018",
      "admincoms": null
    }, {
      "id": 3,
      "name": "venkatesh",
      "email": "venki@gmail.com",
      "mobile": 6666666666,
      "reqsub": "Park is not clean",
      "reqmessage": "Please take action as early as possible",
      "reqstatus": "completed",
      "date": "Thu Jul 19 2018",
      "admincoms": null
    }, {
      "id": 4,
      "name": "Saambar",
      "email": "saambar@gmail.com",
      "mobile": 5555555555,
      "reqsub": "Share autos not available",
      "reqmessage": "Please take action as early as possible",
      "reqstatus": "InProgress",
      "date": "Thu Jul 19 2018",
      "admincoms": null
    }, {
      "id": 5,
      "name": "Shiva",
      "email": "shiva@gmail.com",
      "mobile": 333333333,
      "reqsub": "No marriage",
      "reqmessage": "Please take action as early as possible",
      "reqstatus": "InProgress",
      "date": "Thu Jul 19 2018",
      "admincoms": null
    }, {
      "id": 6,
      "name": "Naresh",
      "email": "naresh@gmail.com",
      "mobile": 222222222,
      "reqsub": "Requesting more girls in team",
      "reqmessage": "Please take action as early as possible",
      "reqstatus": "InProgress",
      "date": "Thu Jul 19 2018",
      "admincoms": null
    }];
    this.complaintsData = this.complaints;
  }

  getComps(): void {
    this.complaintService.getHeroes()
      .subscribe(heroes => this.complaints = heroes);
  }

  viewComplaints(type) {
    if (!this.complaints.length) return;
    if (type == "all") {
      this.complaintsData = this.complaints;
    } else {
      this.complaintsData = _.values(_.filter(this.complaints, { "reqstatus": type }));
    }
  }

  editComplaints(selectedComplaint) {
    console.log("omg", selectedComplaint);
    // this.manageComplaints = data;
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = selectedComplaint;
    dialogConfig.width = '600px';
    dialogConfig.height = '500px';

    const dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
  }

  logout(e): void {
    e.preventDefault();
    localStorage.removeItem("admin");
    this.router.navigate(['/']);
  }

  viewComplaint(selectedComplaint): void {
    // console.log("$$$ ", selectedComplaint);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = selectedComplaint;
    dialogConfig.width = '600px';
    dialogConfig.height = '500px';

    const dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
  }

}
