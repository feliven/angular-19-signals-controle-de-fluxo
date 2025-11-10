import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ListaCategoriaComponent } from './components/lista-categoria/lista-categoria.component';
import { MinhaOrganizacaoComponent } from './components/minha-organizacao/minha-organizacao.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CabecalhoComponent,
    RodapeComponent,
    ListaCategoriaComponent,
    MinhaOrganizacaoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'organo';
}
