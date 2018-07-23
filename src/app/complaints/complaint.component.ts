import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Complaint } from './complaint';
import { ComplaintService } from './complaint.service';

@Component({
    selector: 'app-root',
    providers: [ ComplaintService ],
    templateUrl: './complaint.component.html'
})
export class ComplaintComponent implements OnInit {
    public allcomplaints: Complaint[];  
    constructor(private _httpService: Http, private complaintservice: ComplaintService) { }
    apiValues: string[] = [];
    
    ngOnInit() {
        const comp: Complaint = {
            id: 1,
            name: '',
            email: '',
            mobile: 0,
            reqsub: '',
            reqmessage: '',
            reqstatus: "",
            date: "",
            admincoms: null,
            updatedat: ""
        }
        this.getComplaintById(comp);
        this.getAllComplaints();
        //this.saveComplaint();
    }

    saveComplaint(): void {
        const name = "rakesh";
        const email = "rakesh@gmail.com";
        const mobile = 7382476952;
        const reqsub = "No Foot Paths";
        const reqmessage = "Please solve foot paths problems as early as possible";

        const comp: Complaint = {
            id: 0,
            name: name,
            email: email,
            mobile: mobile,
            reqsub: reqsub,
            reqmessage: reqmessage,
            reqstatus: "",
            date: "",
            admincoms: null,
            updatedat: ""
        };

        this.complaintservice.addComplaint(comp)
            .subscribe(hero => {
                console.log(hero);
            });
    }

    getAllComplaints() {
        this.complaintservice.getAllComplaints()
            .subscribe(complaints => {
                console.log(`all requests ${complaints}`);
            });
    }

    getComplaintById(complaint: Complaint) {
        this.complaintservice.getComplaintById(complaint)
            .subscribe(complaint => {
                console.log(`complaint by id: ${complaint}`);
            });
    }
}
