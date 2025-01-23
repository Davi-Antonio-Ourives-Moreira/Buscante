import { Component, Input } from '@angular/core';
import { ModalLivroComponent } from '../../views/modal-livro/modal-livro.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [ModalLivroComponent, CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {
  @Input() livro!: Object;
  modalAberto!: boolean;

  onModelChange(evento: boolean) {
    this.modalAberto = evento;
  }
}
