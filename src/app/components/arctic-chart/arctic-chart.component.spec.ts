import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcticChartComponent } from './arctic-chart.component';

describe('ArcticChartComponent', () => {
  let component: ArcticChartComponent;
  let fixture: ComponentFixture<ArcticChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcticChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArcticChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
