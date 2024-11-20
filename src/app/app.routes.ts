import { Routes } from '@angular/router';
import { TemperatureChartComponent } from './components/temperature-chart/temperature-chart.component';
import { Co2ChartComponent } from './components/co2-chart/co2-chart.component';
import { MethaneChartComponent } from './components/methane-chart/methane-chart.component';

export const routes: Routes = [
  {path: 'temperature-chart', component: TemperatureChartComponent},
  {path: 'co2-chart', component: Co2ChartComponent},
  {path: 'methane-chart', component: MethaneChartComponent}
];
