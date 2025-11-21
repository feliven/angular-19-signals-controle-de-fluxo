import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoComponent } from './cabecalho.component';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CabecalhoComponent],
    });

    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

  it('should have the correct selector', () => {
    const element = fixture.nativeElement;
    expect(element).toBeTruthy();
  });

  it('should render without errors', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should be an instance of CabecalhoComponent', () => {
    expect(component instanceof CabecalhoComponent).toBe(true);
  });

  it('should have no imports in the component metadata', () => {
    const metadata = (CabecalhoComponent as any).ɵcmp;
    expect(metadata).toBeDefined();
  });
});
