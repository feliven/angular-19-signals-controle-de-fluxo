import { Livro } from './livro.interface';

export interface CategoriaELivro {
  nome: string;
  livros: Livro[];
  classe?: Livro['classe'];
}
