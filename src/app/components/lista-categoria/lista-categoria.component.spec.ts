import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCategoriaComponent } from './lista-categoria.component';
import { Livro } from '../../shared/livro.interface';

describe('ListaCategoriaComponent', () => {
  let component: ListaCategoriaComponent;
  let fixture: ComponentFixture<ListaCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaCategoriaComponent],
    });

    fixture = TestBed.createComponent(ListaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize categorias computed signal', () => {
    expect(component.categorias).toBeDefined();
    expect(component.categorias()).toBeInstanceOf(Array);
  });

  it('should group books by category', () => {
    const categorias = component.categorias();

    expect(categorias.length).toBeGreaterThan(0);
    categorias.forEach((categoria) => {
      expect(categoria).toHaveProperty('nome');
      expect(categoria).toHaveProperty('classe');
      expect(categoria).toHaveProperty('livros');
      expect(Array.isArray(categoria.livros)).toBe(true);
    });
  });

  it('should assign correct CSS class to each category', () => {
    const categorias = component.categorias();

    categorias.forEach((categoria) => {
      if (categoria.nome === 'Literatura') {
        expect(categoria.classe).toBe('literatura');
      } else if (categoria.nome === 'Poesia') {
        expect(categoria.classe).toBe('poesia');
      } else if (categoria.nome === 'Biografias') {
        expect(categoria.classe).toBe('biografias');
      } else if (categoria.nome === 'Mitos e Lendas') {
        expect(categoria.classe).toBe('mitos-lendas');
      } else if (categoria.nome === 'Técnicos') {
        expect(categoria.classe).toBe('tecnicos');
      }
    });
  });

  it('should ensure all books in a category have the same categoria property', () => {
    const categorias = component.categorias();

    categorias.forEach((categoria) => {
      categoria.livros.forEach((livro) => {
        expect(livro.categoria).toBe(categoria.nome);
      });
    });
  });

  it('should add classe property to each book', () => {
    const categorias = component.categorias();

    categorias.forEach((categoria) => {
      categoria.livros.forEach((livro) => {
        expect(livro).toHaveProperty('classe');
      });
    });
  });

  it('should not have duplicate books across categories', () => {
    const categorias = component.categorias();
    const allBooks: Livro[] = [];

    categorias.forEach((categoria) => {
      allBooks.push(...categoria.livros);
    });

    const uniqueBooks = new Set(allBooks.map((livro) => JSON.stringify(livro)));
    expect(uniqueBooks.size).toBe(allBooks.length);
  });
});
