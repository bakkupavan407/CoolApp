import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

import { Complaint } from '../complaints/complaint';
import { ComplaintService } from '../complaints/complaint.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  providers: [ ComplaintService ],
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  complaints: Complaint[];

  constructor(private breakpointObserver: BreakpointObserver,
    private complaintService: ComplaintService) {}

  ngOnInit() {
    this.getComps();
  }

  getComps(): void {
    this.complaintService.getHeroes()
      .subscribe(heroes => this.complaints = heroes);
  }
  
}
