import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AdminAttributeFormComponent} from "../admin-attribute-form/admin-attribute-form.component";

@Component({
    selector: 'app-admin-attribute-dialog',
    templateUrl: 'admin-attribute-dialog.component.html'
})
export class AdminAttributeDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AdminAttributeFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
