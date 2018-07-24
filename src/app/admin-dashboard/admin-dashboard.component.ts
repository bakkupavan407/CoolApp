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
  totalComplaints: number;
  inProgressComplaints: number;
  completedComplaints: number;

  constructor(private breakpointObserver: BreakpointObserver,
    private complaintService: ComplaintService,
    public dialog: MatDialog,
    public router: Router) { }

  ngOnInit() {
    this.getComps();
    const isLoggedIn = localStorage.getItem("admin");

    if (!isLoggedIn) {
      this.router.navigate(['/admin']);
    }
  }

  getComps(): void {
    this.complaintService.getHeroes()
      .subscribe(complaints => {
        console.log("&&&&&&& ", complaints);
        this.complaintsData = complaints;
        this.complaints = complaints;

        this.totalComplaints = complaints.length;
        this.completedComplaints = _.values(_.filter(this.complaints, { "reqstatus": "completed" })).length;
        this.inProgressComplaints = _.values(_.filter(this.complaints, { "reqstatus": "InPending" })).length;
      });
  }

  viewComplaints(type) {
    if (!this.complaints.length) return;
    if (type === "all") {
      this.complaintsData = this.complaints;
    } else if (type === "completed") {
      this.complaintsData = _.values(_.filter(this.complaints, { "reqstatus": "completed" }));
    } else {
      this.complaintsData = _.values(_.filter(this.complaints, { "reqstatus": "InPending" }));
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

    dialogRef.afterClosed().subscribe(
      data => {
        const ccupdatedata: Complaint = {
          id: data.ccdata.id,
          name: '',
          email: '',
          mobile: 0,
          reqsub: '',
          reqmessage: '',
          reqstatus: "",
          date: "",
          admincoms: data.admincomments,
          updatedat: ""
        };
        this.complaintService.updateComplaint(ccupdatedata).subscribe(hero => { });
      });
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
