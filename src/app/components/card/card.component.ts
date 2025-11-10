import { Component } from '@angular/core';

interface Livro {
  titulo: string;
  autoria: string;
  favorito: boolean;
  imagem: string;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  livro: Livro = {
    titulo: 'E não sobrou nenhum',
    autoria: 'Agatha Christie',
    favorito: false,
    imagem: 'https://placehold.co/128x185',
  };

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
}
