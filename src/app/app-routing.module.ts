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
  {
    path: 'forms',
    title: 'Forms',
    loadComponent: () =>
      import('./pages/forms/forms.component').then((m) => m.FormsComponent),
  },
  {
    path: 'routes',
    title: 'Routing',
    loadComponent: () =>
      import('./pages/routes/routes.component').then((m) => m.RoutesComponent),
  },
  {
    path: 'services',
    title: 'Services',
    loadComponent: () =>
      import('./pages/services/services.component').then(
        (m) => m.ServicesComponent,
      ),
  },
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
