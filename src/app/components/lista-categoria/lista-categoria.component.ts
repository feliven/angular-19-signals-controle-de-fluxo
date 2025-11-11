import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { listaLivros } from '../../mock-livros';
import { Livro } from '../../shared/livro.interface';
import { CategoriaELivro } from '../../shared/categoria-e-livro.interface';

@Component({
  selector: 'app-lista-categoria',
  imports: [CardComponent],
  templateUrl: './lista-categoria.component.html',
  styleUrl: './lista-categoria.component.css',
})
export class ListaCategoriaComponent implements OnInit {
  categorias2 = [
    'Literatura',
    'Poesia',
    'Biografias',
    'Mitos e Lendas',
    'Técnicos',
  ];

  livros = listaLivros;
  livrosPorCategoria: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorCategoria = new Map();
    const livros = listaLivros;

    livros.forEach((livro) => {
      const categoria = livro.categoria;
      if (!this.livrosPorCategoria.has(categoria)) {
        this.livrosPorCategoria.set(categoria, []);
      }
      this.livrosPorCategoria.get(categoria)?.push(livro);
    });
  }

  categorias: CategoriaELivro[] = [
    {
      nome: 'Literatura',
      livros: this.livrosPorCategoria.get('Literatura') ?? [],
    },
    {
      nome: 'Poesia',
      livros: this.livrosPorCategoria.get('Poesia') ?? [],
    },
    {
      nome: 'Biografias',
      livros: this.livrosPorCategoria.get('Biografias') ?? [],
    },
    {
      nome: 'Mitos e Lendas',
      livros: this.livrosPorCategoria.get('Mitos e Lendas') ?? [],
    },
    {
      nome: 'Técnicos',
      livros: this.livrosPorCategoria.get('Técnicos') ?? [],
    },
  ];

  obterLivrosPorCategoria(categoria: string) {
    return this.livros.filter((livro) => livro.categoria === categoria);
  }
}
