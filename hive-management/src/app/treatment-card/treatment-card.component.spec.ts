import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentCardComponent } from './treatment-card.component';

describe('TreatmentCardComponent', () => {
  let component: TreatmentCardComponent;
  let fixture: ComponentFixture<TreatmentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
