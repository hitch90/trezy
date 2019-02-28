import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {AdminCategoryFormComponent} from "../admin-category-form/admin-category-form.component";

@Component({
    selector: 'app-admin-category-dialog',
    templateUrl: 'admin-category-dialog.component.html'
})
export class AdminCategoryDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AdminCategoryFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

}
