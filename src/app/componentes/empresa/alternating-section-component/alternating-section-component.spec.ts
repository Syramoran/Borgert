import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternatingSectionComponent } from './alternating-section-component';

describe('AlternatingSectionComponent', () => {
  let component: AlternatingSectionComponent;
  let fixture: ComponentFixture<AlternatingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternatingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternatingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
