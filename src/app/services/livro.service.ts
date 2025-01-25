import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  pesquisarLivros(valorInput: string): Observable<Item[]>{
    const params = new HttpParams().set('q', valorInput);

    return this.http.get<LivrosResultado>(this.API, { params }).pipe(
      tap(retornoAPi => console.log('fluxo do tap', retornoAPi)),
      map(resultado => resultado.items),
      tap(resultado => console.log('Fluxo após map', resultado))
    );
  }
}
