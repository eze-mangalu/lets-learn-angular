import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routes.component.html',
  styles: [],
})
export class RoutesComponent {
  routingModule = `
    import { NgModule } from '@angular/core';
    import { Route, RouterModule } from '@angular/router';
    import { IntroComponent } from './pages/intro/intro.component';
    import { NotFoundComponent } from './pages/not-found/not-found.component';

    const routes: Route[] = [
      {
        path: '',
        component: IntroComponent,
      },
      {
        path: 'components',
        title: 'Components',
        loadComponent: () =>
          import('./pages/components/components.component').then(
            (m) => m.ComponentsComponent,
          ),
      },
      ...
      {
        path: '**',
        title: '404: Not found',
        component: NotFoundComponent,
      },
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}
  `;
  routeGuards = `
    // Auth guard
    import { Injectable } from "@angular/core";
    import {
      ActivatedRouteSnapshot,
      CanActivate,
      Router,
      RouterStateSnapshot,
    } from "@angular/router";

    @Injectable()
    export class AuthGuard implements CanActivate {
      constructor(private authService: AuthService, private router: Router) {}

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true; // If we return false the route won't be accessible.
      }
    }
    
    // In the routing module
    const routes: Routes = [
      {
        path: "/your-path",
        canActivate: [AuthGuard],
      },
  `;

  navigation = `
      <a routerLink="/your-path">Navigate to path</a>
  `;
}
