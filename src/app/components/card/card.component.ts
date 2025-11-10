import { Component, Input } from '@angular/core';
import { Livro } from '../../shared/livro.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() livro: Livro = {
    titulo: '',
    autoria: '',
    favorito: false,
    genero: '',
    imagem: '',
  };

  livro2: Livro = {
    titulo: 'E não sobrou nenhum',
    autoria: 'Agatha Christie',
    favorito: false,
    genero: 'Literatura',
    imagem: 'https://placehold.co/128x185',
  };

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
}
