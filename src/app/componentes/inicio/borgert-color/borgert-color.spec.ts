import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorgertColor } from './borgert-color';

describe('BorgertColor', () => {
  let component: BorgertColor;
  let fixture: ComponentFixture<BorgertColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorgertColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorgertColor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
