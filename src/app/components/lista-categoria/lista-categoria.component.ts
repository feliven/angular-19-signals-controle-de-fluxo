import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { listaLivros } from '../../mock-livros';
import { Livro } from '../../shared/livro.interface';
import { CategoriaELivro } from '../../shared/categoria-e-livro.interface';

const CATEGORIAS_CLASSES: Record<string, string> = {
  Literatura: 'literatura',
  Poesia: 'poesia',
  Biografias: 'biografias',
  'Mitos e Lendas': 'mitos-lendas',
  Técnicos: 'tecnicos',
};

@Component({
  selector: 'app-lista-categoria',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css'],
})
export class ListaCategoriaComponent {
  // Initializes with books from listaLivros in mock-livros.ts
  // Maps each book to add a classe property based on its category
  private readonly livrosSignal = signal<Livro[]>(
    listaLivros.map((livro) => ({
      ...livro,
      classe: CATEGORIAS_CLASSES[livro.categoria] ?? undefined,
    }))
  );

  // Automatically recalculates when livrosSignal changes
  categorias = computed<CategoriaELivro[]>(() => {
    const grupos = new Map<string, Livro[]>();

    // groups books by their categories using a Map data structure
    // If the category doesn't exist, creates a new entry with an empty array
    for (const livro of this.livrosSignal()) {
      if (!grupos.has(livro.categoria)) grupos.set(livro.categoria, []);
      grupos.get(livro.categoria)!.push(livro);
    }

    // transforms the Map of grouped books into an array of CategoriaELivro objects
    return Array.from(grupos.entries()).map(([nome, livros]) => ({
      nome,
      classe: CATEGORIAS_CLASSES[nome],
      livros,
    }));
  });

  // obterLivrosPorCategoria = (categoria: string) =>
  //   this.livrosSignal().filter((livro) => livro.categoria === categoria);
}
