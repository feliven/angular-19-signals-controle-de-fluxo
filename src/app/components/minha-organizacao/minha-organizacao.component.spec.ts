import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaOrganizacaoComponent } from './minha-organizacao.component';

describe('MinhaOrganizacaoComponent', () => {
  let component: MinhaOrganizacaoComponent;
  let fixture: ComponentFixture<MinhaOrganizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaOrganizacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaOrganizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
