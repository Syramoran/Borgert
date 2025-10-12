import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEmpresa } from './info-empresa';

describe('InfoEmpresa', () => {
  let component: InfoEmpresa;
  let fixture: ComponentFixture<InfoEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoEmpresa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEmpresa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
