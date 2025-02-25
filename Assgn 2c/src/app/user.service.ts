import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  private loggedInUser: User | null = null;

  register(user: User): void {
    this.users.push(user);
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  getUser(): User | null {
    return this.loggedInUser;
  }
} 