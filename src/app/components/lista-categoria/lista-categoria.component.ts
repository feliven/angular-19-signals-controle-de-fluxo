import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

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
}
