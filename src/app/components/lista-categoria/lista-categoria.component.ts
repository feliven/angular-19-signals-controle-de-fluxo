import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { listaLivros } from '../../mock-livros';
import { Livro } from '../../shared/livro.interface';
import { CategoriaELivro } from '../../shared/categoria-e-livro.interface';

@Component({
  selector: 'app-lista-categoria',
  imports: [CardComponent, CommonModule],
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
  categorias: CategoriaELivro[] = [];

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

    // The categorias array was initialized before ngOnInit() runs,
    // so livrosPorCategoria was still empty when you tried to access it.
    // Initialize categorias AFTER populating the Map:
    this.categorias = [
      {
        nome: 'Literatura',
        classe: 'literatura',
        livros: this.livrosPorCategoria.get('Literatura') ?? [],
      },
      {
        nome: 'Poesia',
        classe: 'poesia',
        livros: this.livrosPorCategoria.get('Poesia') ?? [],
      },
      {
        nome: 'Biografias',
        classe: 'biografias',
        livros: this.livrosPorCategoria.get('Biografias') ?? [],
      },
      {
        nome: 'Mitos e Lendas',
        classe: 'mitos-lendas',
        livros: this.livrosPorCategoria.get('Mitos e Lendas') ?? [],
      },
      {
        nome: 'Técnicos',
        classe: 'tecnicos',
        livros: this.livrosPorCategoria.get('Técnicos') ?? [],
      },
      {
        nome: 'sdfsdf',
        livros: this.livrosPorCategoria.get('sdfsdf') ?? [],
      },
    ];
  }

  obterLivrosPorCategoria(categoria: string) {
    return this.livros.filter((livro) => livro.categoria === categoria);
  }
}
