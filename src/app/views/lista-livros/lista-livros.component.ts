import { Component } from '@angular/core';
import { LivroComponent } from '../../components/livro/livro.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, CommonModule],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent {
  listaLivros = [];

  constructor(){}
}
