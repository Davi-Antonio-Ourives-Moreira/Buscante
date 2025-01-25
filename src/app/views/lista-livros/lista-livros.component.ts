import { Item } from './../../models/interfaces/interface';
import { FormsModule } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LivroComponent } from '../../components/livro/livro.component';
import { CommonModule } from '@angular/common';
import { LivroService } from '../../services/livro.service';
import { Subscription } from 'rxjs';
import { Livro } from '../../models/interfaces/interface';
import { LivroVolumeInfo } from '../../models/interfaces/livroVolumeInfo';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, CommonModule, FormsModule],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnDestroy {
  valorInput: string = '';

  listaLivros: Livro[] = [];

  subscription!: Subscription;

  livro!: Livro;

  constructor(private service: LivroService){}

  pesquisar(){
    this.subscription = this.service.pesquisarLivros(this.valorInput).subscribe({
      next: (items) => {
        this.listaLivros = this.todosLivrosPesquisados(items);
      },
      error: error => console.log(error),
      complete: () => console.log("Observable completo!")
    });
  }

  todosLivrosPesquisados(items: Item[]): Livro[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
