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

  private categoriasClasses: Map<string, string> = new Map([
    ['Literatura', 'literatura'],
    ['Poesia', 'poesia'],
    ['Biografias', 'biografias'],
    ['Mitos e Lendas', 'mitos-lendas'],
    ['Técnicos', 'tecnicos'],
  ]);

  ngOnInit() {
    this.livrosPorCategoria = new Map();
    const livros = listaLivros;

    livros.forEach((livro) => {
      const categoria = livro.categoria;
      livro.classe = this.categoriasClasses.get(categoria);

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
        classe: this.categoriasClasses.get('Literatura'),
        livros: this.livrosPorCategoria.get('Literatura') ?? [],
      },
      {
        nome: 'Poesia',
        classe: this.categoriasClasses.get('Poesia'),
        livros: this.livrosPorCategoria.get('Poesia') ?? [],
      },
      {
        nome: 'Biografias',
        classe: this.categoriasClasses.get('Biografias'),
        livros: this.livrosPorCategoria.get('Biografias') ?? [],
      },
      {
        nome: 'Mitos e Lendas',
        classe: this.categoriasClasses.get('Mitos e Lendas'),
        livros: this.livrosPorCategoria.get('Mitos e Lendas') ?? [],
      },
      {
        nome: 'Técnicos',
        classe: this.categoriasClasses.get('Técnicos'),
        livros: this.livrosPorCategoria.get('Técnicos') ?? [],
      },
      {
        nome: 'sdfsdf',
        livros: this.livrosPorCategoria.get('sdfsdf') ?? [],
      },
    ];

    console.log(this.categorias);
  }

  obterLivrosPorCategoria(categoria: string) {
    return this.livros.filter((livro) => livro.categoria === categoria);
  }
}
