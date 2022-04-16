import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiveDetailComponent } from './hive-detail.component';

describe('HiveDetailComponent', () => {
  let component: HiveDetailComponent;
  let fixture: ComponentFixture<HiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
