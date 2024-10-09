import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  menuItems: MenuItem[] = [
    {
      name: 'Login',
      url: 'login'
    },
    {
      name: 'Dashboard',
      url: 'dashboard'
    },
  ];
  
}
