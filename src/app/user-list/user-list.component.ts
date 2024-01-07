import { Component, OnInit } from '@angular/core';
import { TUser } from '../model';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users!: TUser[];
  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data.data
    });
  }
}
