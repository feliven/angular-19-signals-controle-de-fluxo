import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Livro } from '../../shared/livro.interface';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  livro = input.required<Livro>();

  livro2: Livro = {
    titulo: 'E não sobrou nenhum',
    autoria: 'Agatha Christie',
    favorito: false,
    categoria: 'Literatura',
    imagem: 'https://placehold.co/128x185',
  };

  @Input() livro3: Livro = {
    titulo: '',
    autoria: '',
    favorito: false,
    categoria: '',
    imagem: '',
  };

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
