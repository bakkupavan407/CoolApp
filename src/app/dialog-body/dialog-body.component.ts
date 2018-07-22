import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { MAT_DIALOG_DATA } from '@angular/material';

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
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

    update() {
        console.log("WoW...");
    }
}
