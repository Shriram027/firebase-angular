import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRoutes } from 'src/app/constants/routes';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: LayoutRoutes.EMPTY,
    // component: LayoutComponent,
    children: [
      {
        path: LayoutRoutes.EMPTY,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
