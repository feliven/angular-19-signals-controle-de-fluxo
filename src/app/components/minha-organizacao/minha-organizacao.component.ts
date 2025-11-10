import { Component } from '@angular/core';
import { ListaCategoriaComponent } from '../lista-categoria/lista-categoria.component';

@Component({
  selector: 'app-minha-organizacao',
  imports: [ListaCategoriaComponent],
  templateUrl: './minha-organizacao.component.html',
  styleUrl: './minha-organizacao.component.css',
})
export class MinhaOrganizacaoComponent {}
