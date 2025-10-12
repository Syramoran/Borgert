import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturasComponent } from './aberturas-component';

describe('AberturasComponent', () => {
  let component: AberturasComponent;
  let fixture: ComponentFixture<AberturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AberturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AberturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
