import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from 'src/app/constants/routes';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  {path:AuthRoutes.EMPTY, component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
