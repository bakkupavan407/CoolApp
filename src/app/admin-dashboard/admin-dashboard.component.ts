import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  cards = [];
  /** Based on the screen size, switch from standard to one column per row */
  ngOnInit() {
    this.cards = [
      {
        title: "Heelo"
      }
    ]
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
