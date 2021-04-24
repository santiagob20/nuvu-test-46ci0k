import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'historial',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'ahorrar',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 'mas',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
