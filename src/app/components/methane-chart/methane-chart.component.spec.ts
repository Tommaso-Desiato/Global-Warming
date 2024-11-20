import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethaneChartComponent } from './methane-chart.component';

describe('MethaneChartComponent', () => {
  let component: MethaneChartComponent;
  let fixture: ComponentFixture<MethaneChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MethaneChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethaneChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
