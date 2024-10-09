import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../../interfaces/menu.item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  imports: [
    CommonModule,
    RouterModule],
   
})
export class NavComponent implements OnInit {

  @Input() menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // Inicializa los datos en ngOnInit, no en el constructor
    // this.menuItems = [
    //   { name: 'login', url: '/login' },
    //   { name: 'dashboard', url: '/dashboard' },
    // ];

    console.log(this.menuItems);
  }

  // No necesitas ngAfterViewInit en este caso
}
