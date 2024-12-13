import { Routes } from '@angular/router';
import { TemperatureChartComponent } from './components/temperature-chart/temperature-chart.component';
import { Co2ChartComponent } from './components/co2-chart/co2-chart.component';
import { MethaneChartComponent } from './components/methane-chart/methane-chart.component';
import { No2ChartComponent } from './components/no2-chart/no2-chart.component';
import { ArcticChartComponent } from './components/arctic-chart/arctic-chart.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'temperature-chart', component: TemperatureChartComponent},
  {path: 'co2-chart', component: Co2ChartComponent},
  {path: 'methane-chart', component: MethaneChartComponent},
  {path: 'no2-chart', component: No2ChartComponent},
  {path: 'arctic-chart', component: ArcticChartComponent},
  {path: '**', redirectTo: '' }
];
