import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosItems } from './servicios-items';

describe('ServiciosItems', () => {
  let component: ServiciosItems;
  let fixture: ComponentFixture<ServiciosItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
