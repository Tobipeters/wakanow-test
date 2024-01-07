import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TUser } from 'src/app/model';
import { ViewUserComponent } from '../view-user/view-user.component';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: TUser;
  @Input() getUsers!: any;

  constructor(private dialog: MatDialog, private usersService: UsersService) {}

  ngOnInit(): void {
    // console.log(this.user);
  }

  deleteUser() {
    this.usersService.deleteUser(this.user.id).subscribe((res) => {
      if (res === 204) {
        this.getUsers()
      }
    });
  }

  openDialog() {
    this.dialog.open(ViewUserComponent, {
      data: this.user,
      width: "92%",
      maxWidth: "420px",
      position: {
        top: '20px',
      },
    });
  }
}
