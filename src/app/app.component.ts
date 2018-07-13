import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private _httpService: Http) { }
    apiValues: string[] = [];
    title = "Blog, Complaints and More....";
    
    ngOnInit() {
        // this._httpService.get('/api/complaint/getall').subscribe(values => {
        //     // this.apiValues = values.json() as string[];
        //     console.log(values);
        // });
        // this.add();
        // this._httpService.post('', {
        //     name: "Rakesh",
        //     email: "rakesh10@gmail.com",
        //     mobile: 77777777,
        //     reqsub: "No Foot Paths",
        //     reqmessage: "No Foot Paths near bus stop in kukatpally."
        // }).subscribe(values => {
        //     // this.apiValues = values.json() as string[];
        //     console.log(values);
        // });
    }
}
