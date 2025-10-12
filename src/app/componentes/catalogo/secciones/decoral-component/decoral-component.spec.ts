import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoralComponent } from './decoral-component';

describe('DecoralComponent', () => {
  let component: DecoralComponent;
  let fixture: ComponentFixture<DecoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecoralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
