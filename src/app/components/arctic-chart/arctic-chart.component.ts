import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts} from "ngx-echarts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arctic-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './arctic-chart.component.html',
  styleUrl: './arctic-chart.component.css',
  providers: [
    provideEcharts(),
  ]

})
export class ArcticChartComponent implements OnInit{
  options!: EChartsOption;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getArctic().subscribe( res => {
      const xAxisData = [];
      const value = [];
      const anom = [];
      
      
      for (const key in res.arcticData.data) {
        if (res.arcticData.data.hasOwnProperty(key)) {
          const dataPoint = res.arcticData.data[key];
          if (dataPoint.value !== -9999 && dataPoint.anom !== -9999) {
            xAxisData.push(key);
            value.push(dataPoint.value);
            anom.push(dataPoint.anom);
          }
        }
      }
      
      this.options = {
        legend: {
          data: ['Value', 'Anomaly'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent:false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {},
        series: [
          {
            name: 'Value',
            type: 'line',
            data: value,
            animationDelay: idx => idx * 10 + 100,
          },
          {
            name: 'Anomaly',
            type: 'line',
            data: anom,
            animationDelay: idx => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: idx => idx * 5,
      };
    });
  };

}
