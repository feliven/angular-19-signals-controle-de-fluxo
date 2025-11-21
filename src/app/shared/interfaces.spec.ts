import { Livro } from './livro.interface';
import { CategoriaELivro } from './categoria-e-livro.interface';

describe('CategoriaELivro Interface', () => {
  it('should accept valid CategoriaELivro object with all properties', () => {
    const validCategoria: CategoriaELivro = {
      nome: 'Ficção',
      livros: [
        {
          titulo: 'Test Book',
          autoria: 'Test Author',
          favorito: true,
          imagem: 'test.jpg',
          categoria: 'Ficção',
          classe: 'destaque',
        },
      ],
      classe: 'destaque',
    };

    expect(validCategoria).toBeDefined();
    expect(validCategoria.nome).toBe('Ficção');
    expect(validCategoria.livros).toHaveLength(1);
    expect(validCategoria.classe).toBe('destaque');
  });

  it('should accept CategoriaELivro object without optional classe property', () => {
    const categoriaWithoutClasse: CategoriaELivro = {
      nome: 'Romance',
      livros: [],
    };

    expect(categoriaWithoutClasse).toBeDefined();
    expect(categoriaWithoutClasse.nome).toBe('Romance');
    expect(categoriaWithoutClasse.livros).toEqual([]);
    expect(categoriaWithoutClasse.classe).toBeUndefined();
  });

  it('should accept empty livros array', () => {
    const categoriaVazia: CategoriaELivro = {
      nome: 'Categoria Vazia',
      livros: [],
    };

    expect(categoriaVazia.livros).toEqual([]);
    expect(categoriaVazia.livros).toHaveLength(0);
  });

  it('should accept multiple Livro objects in livros array', () => {
    const livros: Livro[] = [
      {
        titulo: 'Livro 1',
        autoria: 'Autor 1',
        favorito: true,
        imagem: 'livro1.jpg',
        categoria: 'Ficção',
      },
      {
        titulo: 'Livro 2',
        autoria: 'Autor 2',
        favorito: false,
        imagem: 'livro2.jpg',
        categoria: 'Romance',
      },
    ];

    const categoria: CategoriaELivro = {
      nome: 'Diversos',
      livros: livros,
    };

    expect(categoria.livros).toHaveLength(2);
    expect(categoria.livros[0].titulo).toBe('Livro 1');
    expect(categoria.livros[1].titulo).toBe('Livro 2');
  });

  it('should have nome as string type', () => {
    const categoria: CategoriaELivro = {
      nome: 'Test',
      livros: [],
    };

    expect(typeof categoria.nome).toBe('string');
  });

  it('should have livros as array type', () => {
    const categoria: CategoriaELivro = {
      nome: 'Test',
      livros: [],
    };

    expect(Array.isArray(categoria.livros)).toBe(true);
  });

  it('should accept classe with same type as Livro classe', () => {
    const categoria: CategoriaELivro = {
      nome: 'Test',
      livros: [],
      classe: 'premium',
    };

    expect(categoria.classe).toBe('premium');
    expect(typeof categoria.classe).toBe('string');
  });
});
