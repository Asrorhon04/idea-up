import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{
		path:'login',
		loadComponent: () =>
			import('./pages/login/login.component').then((m) => m.LoginComponent),
	},
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component'),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component'),
  },
  { path: '**', redirectTo: 'not-found' },
];
