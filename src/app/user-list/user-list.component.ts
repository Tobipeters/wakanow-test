import { Component, OnInit } from '@angular/core';
import { TUser } from '../model';
import { UsersService } from '../service/users.service';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users!: TUser[];
  constructor(
    public usersService: UsersService,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  

  getUsers() {
    // this.firebaseService.getAllUsers().subscribe((data) => {
    //   console.log(data);
    //   this.users = data;
    // });
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data.data
    });
  }
}
