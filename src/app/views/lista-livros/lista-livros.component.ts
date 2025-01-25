import { Item } from './../../models/interfaces/interface';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { LivroComponent } from '../../components/livro/livro.component';
import { CommonModule } from '@angular/common';
import { LivroService } from '../../services/livro.service';
import { catchError, debounceTime, filter, map, of, Subscription, switchMap, throwError } from 'rxjs';
import { Livro } from '../../models/interfaces/interface';
import { LivroVolumeInfo } from '../../models/interfaces/livroVolumeInfo';
import { log } from 'node:console';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [LivroComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent {
  valorInput = new FormControl;

  constructor(private service: LivroService){}



  livrosEncontrados$ = this.valorInput.valueChanges.pipe(
    debounceTime(
      PAUSA
    ),
    filter(
      (valorDigitado) => valorDigitado.length >= 3
      ),
    switchMap((valor) => {
      if (!valor){
        return of([])
      }

      return this.service.pesquisarLivros(valor);
    }),
    map(
      items => this.todosLivrosPesquisados(items)
    ),
    catchError(erro => {
      console.log(erro);
      return throwError(() => new Error('Aconteceu um erro inesperado!'))
    })
  )


  todosLivrosPesquisados(items: Item[]): Livro[] {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }
}
