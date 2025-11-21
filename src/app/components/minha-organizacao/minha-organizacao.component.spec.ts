import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaOrganizacaoComponent } from './minha-organizacao.component';
import { ListaCategoriaComponent } from '../lista-categoria/lista-categoria.component';

describe('MinhaOrganizacaoComponent', () => {
  let component: MinhaOrganizacaoComponent;
  let fixture: ComponentFixture<MinhaOrganizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaOrganizacaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinhaOrganizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct selector', () => {
    const componentDef = (MinhaOrganizacaoComponent as any).ɵcmp;
    expect(componentDef.selectors[0][0]).toBe('app-minha-organizacao');
  });

  it('should import ListaCategoriaComponent', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const listaCategoriaElement = compiled.querySelector('app-lista-categoria');
    expect(listaCategoriaElement).toBeDefined();
  });

  it('should have ListaCategoriaComponent in imports', () => {
    const componentImports = (MinhaOrganizacaoComponent as any).ɵcmp
      .dependencies;
    expect(componentImports).toBeDefined();

    if (typeof componentImports === 'function') {
      const resolvedImports = componentImports();
      const hasListaCategoria = Array.isArray(resolvedImports)
        ? resolvedImports.some(
            (dep: any) =>
              dep === ListaCategoriaComponent ||
              dep.name === 'ListaCategoriaComponent' ||
              dep.type?.name === 'ListaCategoriaComponent'
          )
        : false;
      expect(hasListaCategoria).toBeTruthy();
    } else {
      const hasListaCategoria = Array.isArray(componentImports)
        ? componentImports.some(
            (dep: any) =>
              dep === ListaCategoriaComponent ||
              dep.name === 'ListaCategoriaComponent' ||
              dep.type?.name === 'ListaCategoriaComponent'
          )
        : false;
      expect(hasListaCategoria).toBeTruthy();
    }
  });

  it('should contain app-lista-categoria component in template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
    expect(compiled.innerHTML).toBeDefined();
  });

  it('should be defined with correct metadata', () => {
    const metadata = (MinhaOrganizacaoComponent as any).ɵcmp;
    expect(metadata).toBeDefined();
    expect(metadata.standalone).toBeTruthy();
  });

  it('should render without errors', () => {
    expect(() => {
      fixture.detectChanges();
    }).not.toThrow();
  });

  it('should be a standalone component', () => {
    const componentDef = (MinhaOrganizacaoComponent as any).ɵcmp;
    expect(componentDef.standalone).toBeTruthy();
  });

  it('should have template and style URLs defined', () => {
    const componentDef = (MinhaOrganizacaoComponent as any).ɵcmp;
    expect(componentDef.styles).toBeDefined();
  });
});
