import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];

  constructor() {
    this.loadUsersFromLocalStorage();
  }

  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
    console.log(this.users)
    this.saveUsersToLocalStorage();
  }

  editUser(index: number, user: any) {
    this.users[index] = user;
    this.saveUsersToLocalStorage();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.saveUsersToLocalStorage();
  }

  // Método para carregar os dados do LocalStorage
  private loadUsersFromLocalStorage() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
  private saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  // Método para recarregar os dados do LocalStorage
  reloadUsersFromLocalStorage() {
    this.loadUsersFromLocalStorage();
  }
}
