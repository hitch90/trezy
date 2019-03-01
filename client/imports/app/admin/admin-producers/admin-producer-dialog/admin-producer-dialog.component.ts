import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AdminProducerFormComponent} from "../admin-producer-form/admin-producer-form.component";

@Component({
    selector: 'app-admin-producer-dialog',
    templateUrl: 'admin-producer-dialog.component.html'
})
export class AdminProducerDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AdminProducerFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
