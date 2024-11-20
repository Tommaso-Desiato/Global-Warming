import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts} from "ngx-echarts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective,],
  templateUrl: './temperature-chart.component.html',
  styleUrl: './temperature-chart.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class TemperatureChartComponent implements OnInit {
  options!: EChartsOption;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTemperature().subscribe( res => {
      const xAxisData = [];
      const data = [];
      const data2 = [];
      
      
      for (let i = 0; i < res.result.length; i++) {
        xAxisData.push(res.result[i].time);
        data.push(res.result[i].land);
        data2.push(res.result[i].station);
      }
      
      this.options = {
        legend: {
          data: ['Land', 'Station'],
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
            name: 'Land',
            type: 'bar',
            data: data,
            animationDelay: idx => idx * 10 + 100,
          },
          {
            name: 'Station',
            type: 'bar',
            data: data2,
            animationDelay: idx => idx * 10 + 100,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: idx => idx * 5,
      };
    });
  };
}
