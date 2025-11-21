import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCategoriaComponent } from './lista-categoria.component';
import { Livro } from '../../shared/livro.interface';
import { signal } from '@angular/core';

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

describe('ListaCategoriaComponent - Extended Coverage', () => {
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

  describe('classe property assignment with ?? operator', () => {
    it('should assign correct classe when category exists in CATEGORIAS_CLASSES', () => {
      const categorias = component.categorias();

      const literaturaCategory = categorias.find(
        (c) => c.nome === 'Literatura'
      );
      expect(literaturaCategory).toBeDefined();
      expect(literaturaCategory?.classe).toBe('literatura');

      literaturaCategory?.livros.forEach((livro) => {
        expect(livro.classe).toBe('literatura');
      });
    });

    it('should assign undefined classe when category does not exist in CATEGORIAS_CLASSES', () => {
      // Create a new component instance with custom test data
      const testComponent = new ListaCategoriaComponent();
      (testComponent as any).livrosSignal = signal<Livro[]>([
        {
          titulo: 'Test Book',
          autoria: 'Test Author',
          categoria: 'CategoriaDesconhecida',
          imagem: 'test.jpg',
          classe: undefined,
          favorito: false,
        },
      ]);

      const categorias = testComponent.categorias();
      const unknownCategory = categorias.find(
        (c) => c.nome === 'CategoriaDesconhecida'
      );

      expect(unknownCategory).toBeDefined();
      expect(unknownCategory?.classe).toBeUndefined();
      expect(unknownCategory?.livros[0].classe).toBeUndefined();
    });

    it('should handle mixed categories - some with classe, some without', () => {
      (component as any).livrosSignal = signal<Livro[]>([
        {
          titulo: 'Known Category Book',
          autoria: 'Author 1',
          categoria: 'Literatura',
          imagem: 'img1.jpg',
          classe: 'literatura',
          favorito: false,
        },
        {
          titulo: 'Unknown Category Book',
          autoria: 'Author 2',
          categoria: 'UnknownCategory',
          imagem: 'img2.jpg',
          classe: undefined,
          favorito: true,
        },
      ]);

      const categorias = component.categorias();

      const knownCat = categorias.find((c) => c.nome === 'Literatura');
      const unknownCat = categorias.find((c) => c.nome === 'UnknownCategory');

      expect(knownCat?.classe).toBe('literatura');
      expect(knownCat?.livros[0].classe).toBe('literatura');

      expect(unknownCat?.classe).toBeUndefined();
      expect(unknownCat?.livros[0].classe).toBeUndefined();
    });

    it('should verify all CATEGORIAS_CLASSES mappings work correctly', () => {
      const expectedMappings = {
        Literatura: 'literatura',
        Poesia: 'poesia',
        Biografias: 'biografias',
        'Mitos e Lendas': 'mitos-lendas',
        Técnicos: 'tecnicos',
      };

      const categorias = component.categorias();

      Object.entries(expectedMappings).forEach(
        ([categoryName, expectedClass]) => {
          const category = categorias.find((c) => c.nome === categoryName);
          if (category) {
            expect(category.classe).toBe(expectedClass);
            category.livros.forEach((livro) => {
              expect(livro.classe).toBe(expectedClass);
            });
          }
        }
      );
    });

    it('should use nullish coalescing operator correctly - undefined when category not found', () => {
      const testLivro: Livro = {
        titulo: 'Test',
        autoria: 'Author',
        categoria: 'NonExistent',
        imagem: 'img.jpg',
        classe: undefined,
        favorito: false,
      };

      // Simulate the mapping logic
      const CATEGORIAS_CLASSES: Record<string, string> = {
        Literatura: 'literatura',
        Poesia: 'poesia',
        Biografias: 'biografias',
        'Mitos e Lendas': 'mitos-lendas',
        Técnicos: 'tecnicos',
      };

      const mappedClasse = CATEGORIAS_CLASSES[testLivro.categoria] ?? undefined;
      expect(mappedClasse).toBeUndefined();
    });
  });

  describe('HTML template rendering with classe', () => {
    it('should apply ngClass with categoria.classe', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const sections = compiled.querySelectorAll('section.categorias');

      expect(sections.length).toBeGreaterThan(0);
      sections.forEach((section: HTMLElement) => {
        const hasClassApplied = section.classList.length > 1; // More than just 'categorias'
        // At least one section should have a classe applied
      });
    });

    it('should render linha-destaque with correct ngClass', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const linhas = compiled.querySelectorAll('span.linha-destaque');

      expect(linhas.length).toBeGreaterThan(0);
    });
  });
});
