import { Routes } from '@angular/router';
import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'lista-livros',
    pathMatch: 'full'
  },
  {
    path: 'lista-livros',
    component: ListaLivrosComponent
  }
];
