import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Http } from '@angular/http';

import { Complaint } from './complaint';
import { ComplaintService } from './complaint.service';

import { MatCardModule } from '@angular/material';

@Component({
    selector: 'app-root',
    providers: [ ComplaintService ],
    templateUrl: './complaint.component.html',
    styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
    isReqSaved: boolean = false;
    isReqFailed: boolean = false;
    form: FormGroup;
    public allcomplaints: Complaint[];
    constructor(private _httpService: Http, private complaintservice: ComplaintService) {
        this.form = new FormGroup({
            username: new FormControl("", Validators.required),
            usermobile: new FormControl("", Validators.required),
            useremail: new FormControl("", Validators.required),
            reqtitle: new FormControl("", Validators.required),
            reqmessage: new FormControl("", Validators.required)
        });
    }
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
        console.log("$$$$", this.form.value);

        const name = this.form.value.username;
        const email = this.form.value.useremail;
        const mobile = this.form.value.usermobile;
        const reqsub = this.form.value.reqtitle;
        const reqmessage = this.form.value.reqmessage;

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

        console.log("heelo there ", comp);

        this.complaintservice.addComplaint(comp)
            .subscribe(result => {
                console.log(result);
                if(result === 1) {
                    this.isReqSaved = true;
                } else {
                    this.isReqFailed = false;
                }
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

    complaintFormCancel(e) {
        if(e) e.preventDefault();
        this.form.reset();
    }
}
