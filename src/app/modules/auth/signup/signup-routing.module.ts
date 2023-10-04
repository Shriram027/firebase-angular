import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes } from 'src/app/constants/routes';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {path:AuthRoutes.EMPTY, component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
