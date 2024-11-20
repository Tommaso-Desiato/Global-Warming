import { ComponentFixture, TestBed } from '@angular/core/testing';

import { No2ChartComponent } from './no2-chart.component';

describe('No2ChartComponent', () => {
  let component: No2ChartComponent;
  let fixture: ComponentFixture<No2ChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [No2ChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(No2ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
