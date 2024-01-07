import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewUserComponent {
  constructor(public dialogRef: MatDialogRef<ViewUserComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
