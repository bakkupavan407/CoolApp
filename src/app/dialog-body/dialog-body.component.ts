import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { Http } from '@angular/http';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import {
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions
} from '@angular/material'

@Component({
    selector: 'dialog-body-component',
    templateUrl: './dialog-body.component.html'
})
export class DialogBodyComponent {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<DialogBodyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log(this.data);
        if(this.data.reqstatus === "InPending") {
            this.form = new FormGroup({
                admincomments: new FormControl({value: '', disabled: false})
            });
        } else {
            this.form = new FormGroup({
                admincomments: new FormControl({value: '', disabled: true})
            });
        }
    }

    updateComplaint() {
        this.form.value.ccdata = this.data;
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
