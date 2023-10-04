import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutes, LayoutRoutes } from './constants/routes';

const routes: Routes = [
 {path:LayoutRoutes.EMPTY,
  loadChildren:()=>import('./modules/layout/layout.module').then(m=> m.LayoutModule)
},
{path:AuthRoutes.SIGNIN,
  loadChildren:()=>import('./modules/auth/signin/signin.module').then(m=> m.SigninModule)
},
{path:AuthRoutes.SIGNUP,
  loadChildren:()=>import('./modules/auth/signup/signup.module').then(m=> m.SignupModule)
},
{path:AuthRoutes.RESET_PASSWORD,
  loadChildren:()=>import('./modules/auth/reset-password/reset-password.module').then(m=> m.ResetPasswordModule)
},
{
  path:LayoutRoutes.WILD_CARD_ROUTE,
  redirectTo:LayoutRoutes.EMPTY,
  pathMatch:'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
