import { Component } from '@angular/core';
import { AuthRoutes, LayoutRoutes } from 'src/app/constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly AuthRoutes = AuthRoutes;
  readonly LayoutRoutes = LayoutRoutes;

}
