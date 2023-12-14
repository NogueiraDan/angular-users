import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  editingIndex: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  editUser(index: number) {
    this.editingIndex = index;
  }

  updateUser(index: number) {
    if (this.editingIndex !== null) {
      const editedUser = this.users[index];
      this.userService.editUser(index, editedUser);
      this.editingIndex = null;
    }
  }

  cancelEdit() {
    this.editingIndex = null;
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
  }
}
