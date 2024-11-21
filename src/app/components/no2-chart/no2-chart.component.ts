import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts} from "ngx-echarts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-no2-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './no2-chart.component.html',
  styleUrl: './no2-chart.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class No2ChartComponent implements OnInit{
  options: EChartsOption = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getNo2().subscribe( res => {
      const xAxisData = [];
      const data = [];

      for (let i = 0; i < res.nitrous.length; i++) {
        xAxisData.push(res.nitrous[i].date);
        data.push(res.nitrous[i].average);
      }
      this.options = {
        legend: {
          data: ['Average'],
          align:'left',
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
          name: 'Average',
          type: 'line',
          data: data,
          animationDelay: idx => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 10,
      }
    })
  }
}
