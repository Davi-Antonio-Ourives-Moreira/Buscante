import { Component, Input } from '@angular/core';
import { ModalLivroComponent } from '../../views/modal-livro/modal-livro.component';
import { CommonModule } from '@angular/common';
import { Livro } from '../../models/interfaces/interface';
import { AutoriaPipe } from '../../pipes/autoria.pipe';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [ModalLivroComponent, CommonModule, AutoriaPipe],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() livro!: Livro;
  modalAberto!: boolean;

  onModelChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
