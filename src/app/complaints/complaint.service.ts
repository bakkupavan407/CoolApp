import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {RequestOptions} from "@angular/http";

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Complaint } from './complaint';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ComplaintService {
    private handleError: HandleError;

    constructor(private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
            this.handleError = httpErrorHandler.createHandleError('HeroesService');
    }

    addComplaint (complaint: any) {
        console.log("service --> ", complaint);
        return this.http.post('api/complaint/Post01', complaint, httpOptions)
        .pipe(
            catchError(this.handleError('addComplaint', complaint))
        );
    }

    getAllComplaints() {
        return this.http.get('api/complaint/GetAllComplaints', httpOptions)
        .pipe(
            map((response:Response)=> {
                console.log("$$$$$ ", response);
                return response;
            }),
            catchError(this.handleError('getAllComplaints', ''))
        );
    }

    getHeroes (): Observable<Complaint[]> {
        return this.http.get<Complaint[]>('api/complaint/GetAllComplaints', httpOptions)
          .pipe(
            catchError(this.handleError('getHeroes', []))
          );
      }

    getComplaintById(complaint: Complaint) {
        return this.http.post<Complaint>('api/complaint/GetComplaintById', complaint, httpOptions)
        .pipe(
            map((response:Response)=> {
                console.log("$$$$$ ", response);
                return response;
            }),
            catchError(this.handleError('getComplaintById', ''))
        );
    }

    updateComplaint(complaint: Complaint): Observable<Complaint> {
        return this.http.post<Complaint>('api/complaint/UpdateComplaint', complaint, httpOptions)
        .pipe(
            map((response:Response)=> {
                console.log("$$$$$ ", response);
                return response;
            }),
            catchError(this.handleError('updateComplaint', ''))
        );
    }
}
