import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaOrganizacaoComponent } from './minha-organizacao.component';

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
    const compiled = fixture.nativeElement;
    expect(compiled.tagName.toLowerCase()).toBe('app-minha-organizacao');
  });

  it('should import ListaCategoriaComponent', () => {
    const imports = (MinhaOrganizacaoComponent as any).ɵcmp.dependencies;
    expect(imports).toBeDefined();
    expect(
      imports.some((dep: any) => dep.name === 'ListaCategoriaComponent')
    ).toBeTruthy();
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
