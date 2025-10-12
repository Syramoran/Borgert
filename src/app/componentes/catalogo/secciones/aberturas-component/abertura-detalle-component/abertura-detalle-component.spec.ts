import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaDetalleComponent } from './abertura-detalle-component';

describe('AberturaDetalleComponent', () => {
  let component: AberturaDetalleComponent;
  let fixture: ComponentFixture<AberturaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AberturaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AberturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
