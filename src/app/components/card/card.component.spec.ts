import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Livro } from '../../shared/livro.interface';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockLivro: Livro = {
    titulo: 'Test Book',
    autoria: 'Test Author',
    favorito: false,
    categoria: 'Test Category',
    imagem: 'https://test.com/image.jpg',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent],
    });

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('livro', mockLivro);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have required livro input signal', () => {
    expect(component.livro()).toEqual(mockLivro);
  });

  it('should initialize livro2 with default values', () => {
    expect(component.livro2.titulo).toBe('E não sobrou nenhum');
    expect(component.livro2.autoria).toBe('Agatha Christie');
    expect(component.livro2.favorito).toBe(false);
    expect(component.livro2.categoria).toBe('Literatura');
    expect(component.livro2.imagem).toBe('https://placehold.co/128x185');
  });

  it('should initialize livro3 with empty values', () => {
    expect(component.livro3.titulo).toBe('');
    expect(component.livro3.autoria).toBe('');
    expect(component.livro3.favorito).toBe(false);
    expect(component.livro3.categoria).toBe('');
    expect(component.livro3.imagem).toBe('');
  });

  it('should toggle favorito from false to true', () => {
    expect(component.livro().favorito).toBe(false);
    component.alternarFavorito();
    expect(component.livro().favorito).toBe(true);
  });

  it('should toggle favorito from true to false', () => {
    const favoritoLivro: Livro = { ...mockLivro, favorito: true };
    fixture.componentRef.setInput('livro', favoritoLivro);
    fixture.detectChanges();

    expect(component.livro().favorito).toBe(true);
    component.alternarFavorito();
    expect(component.livro().favorito).toBe(false);
  });

  it('should toggle favorito multiple times', () => {
    expect(component.livro().favorito).toBe(false);
    component.alternarFavorito();
    expect(component.livro().favorito).toBe(true);
    component.alternarFavorito();
    expect(component.livro().favorito).toBe(false);
    component.alternarFavorito();
    expect(component.livro().favorito).toBe(true);
  });
});
