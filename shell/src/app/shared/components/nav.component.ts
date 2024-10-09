import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MenuItem } from '../interfaces/menu.item';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: '<ng-template #navContainer></ng-template>',
})
export class NavComponent implements AfterViewInit {
  /**
   * View child of tabs component
   */
  @ViewChild('navContainer', { read: ViewContainerRef })
  navContainer!: ViewContainerRef;


  @Input() menuItems: MenuItem[] = [];

  /**
   * after view init
   */
  async ngAfterViewInit() {
    const cmp = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: 'NavComponent',
    });
    

    // Crear la instancia del componente con aserción de tipo
    const create = this.navContainer.createComponent<NavComponent>(cmp.NavComponent)
    // Asignar las propiedades a la instancia del componente
    create.instance.menuItems = this.menuItems;
  }
}