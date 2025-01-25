import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Livro } from '../../models/interfaces/interface';

@Component({
  selector: 'app-modal-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-livro.component.html',
  styleUrl: './modal-livro.component.css'
})
export class ModalLivroComponent {

  constructor() { }

  @Input() livro!: Livro;
  statusModal: boolean = true;
  @Output() mudouModal = new EventEmitter()

  fecharModal() {
    this.statusModal = false
    this.mudouModal.emit(this.statusModal)
    //body.style.overflow = "scroll"
  }

  esconderScroll(){
    if(this.statusModal == true ) {
      //body.style.overflow = "hidden";
    }
  }

  lerPrevia() {
    window.open(this.livro.previewLink, '_blank');
  }

}
