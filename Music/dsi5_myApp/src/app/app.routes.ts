import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',

  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumb',
    loadComponent: () => import('./breadcrumb/breadcrumb.page').then( m => m.BreadcrumbPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./chip/chip.page').then( m => m.ChipPage)
  },
  {
    path: 'content',
    loadComponent: () => import('./content/content.page').then( m => m.ContentPage)
  },
  {
    path: 'date',
    loadComponent: () => import('./date/date.page').then( m => m.DatePage)
  },
  {
    path: 'floatingactionbutton',
    loadComponent: () => import('./floatingactionbutton/floatingactionbutton.page').then( m => m.FloatingactionbuttonPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
  {
    path: 'scroll',
    loadComponent: () => import('./scroll/scroll.page').then( m => m.ScrollPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'usuarios',
    loadComponent: () => import('./usuarios/usuarios.page').then( m => m.UsuariosPage)
  },
  {
    path: 'agregarusuarios',
    loadComponent: () => import('./agregarusuarios/agregarusuarios.page').then( m => m.AgregarusuariosPage)
  },
];
