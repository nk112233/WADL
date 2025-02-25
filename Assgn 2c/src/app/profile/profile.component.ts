import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>User Profile</h2>
    <div *ngIf="user">
      <p>Username: {{ user.username }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Phone Number: {{ user.phoneNumber }}</p>
    </div>
    <div *ngIf="!user">
      <p>No user logged in.</p>
    </div>
  `,
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  ngOnInit() {
    if (typeof localStorage !== 'undefined') { // Check if localStorage is available
      this.user = JSON.parse(localStorage.getItem('user') || 'null'); // Get user from local storage
    }
  }
} 