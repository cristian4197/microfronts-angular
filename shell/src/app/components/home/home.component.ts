import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu.item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuItems: MenuItem [] = [
    {
      name: 'login',
      url: '/dashboard'
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
