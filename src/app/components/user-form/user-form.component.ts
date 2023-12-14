import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user = {
    name: '',
    age: null,
    phone: '',
    address: ''
  };

  constructor(private userService: UserService) {}

  ngOnInit() {}

  addUser() {
    this.userService.addUser(this.user);
    this.user = {
      name: '',
      age: null,
      phone: '',
      address: ''
    };
  }
}