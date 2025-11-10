import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { listaLivros } from '../../mock-livros';

@Component({
  selector: 'app-lista-categoria',
  imports: [CardComponent],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css',
})
export class ListaCategoriaComponent {
  categorias = [
    'Literatura',
    'Poesia',
    'Biografias',
    'Mitos e Lendas',
    'Técnicos',
  ];

  livros = listaLivros;

  obterLivrosPorCategoria(categoria: string) {
    return this.livros.filter((livro) => livro.genero === categoria);
  }
}
