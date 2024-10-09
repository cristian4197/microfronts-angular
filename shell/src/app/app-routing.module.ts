import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

// Configuramos las rutas con carga perezosa
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => 
      loadRemoteModule(
        {
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './LoginModule'
        }
      ).then((m) => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => 
      loadRemoteModule(
        {
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          exposedModule: './DashboardModule'
        }
      ).then((m) => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
