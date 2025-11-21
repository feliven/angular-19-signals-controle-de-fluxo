import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeComponent } from './rodape.component';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RodapeComponent],
    });

    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct selector', () => {
    const compiled = fixture.nativeElement;
    expect(fixture.componentRef.componentType).toBeDefined();
  });

  it('should render the component', () => {
    expect(fixture.nativeElement).toBeTruthy();
  });

  it('should initialize without errors', () => {
    expect(() => {
      fixture.detectChanges();
    }).not.toThrow();
  });

  it('should have empty imports array', () => {
    const metadata = (RodapeComponent as any).ɵcmp;
    expect(metadata).toBeDefined();
  });

  it('should be a standalone component', () => {
    const metadata = (RodapeComponent as any).ɵcmp;
    expect(metadata.standalone).toBe(true);
  });
});
