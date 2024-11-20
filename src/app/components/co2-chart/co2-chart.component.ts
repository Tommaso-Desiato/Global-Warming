import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts} from "ngx-echarts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-co2-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './co2-chart.component.html',
  styleUrl: './co2-chart.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class Co2ChartComponent implements OnInit{
  options!: EChartsOption;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCo2().subscribe( res => {
      const xAxisData = [];
      const data = [];

      for (let i = 0; i < res.co2.length; i++) {
        xAxisData.push(res.co2[i].year);
        data.push(res.co2[i].cycle);
      }
    this.options = {
      legend: {
        data: ['Cycle'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Cycles',
          type: 'line',
          data: data,
        },
      ],
      animationEasing: 'elasticOut',
    };
    });
  };
}
