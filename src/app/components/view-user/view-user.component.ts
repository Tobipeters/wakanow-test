import { Component, ViewEncapsulation, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TUser } from 'src/app/model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewUserComponent implements OnInit {
  viewUserForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TUser,
    public dialogRef: MatDialogRef<ViewUserComponent>,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.viewUserForm = this.fb.group({
      id: [this.data.id],
      firstName: [this.data.first_name],
      lastName: [this.data.last_name],
      email: [{ value: this.data.email, disabled: true }],
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    const payload = {
      name: `${this.viewUserForm.value.firstName} ${this.viewUserForm.value.lastName}`,
      ...this.viewUserForm.value,
    };

    this.usersService.updateUser(payload).subscribe((res) => {
      console.log(res);
      this.usersService.getAllUsers()
    });
  }
}
