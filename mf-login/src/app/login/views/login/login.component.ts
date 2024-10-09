import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu.item';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  menuItems:MenuItem [] = [
    {
      name: 'login',
      url: '/login'
    },
    {
      name: 'dashboard',
      url: '/dashboard'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
