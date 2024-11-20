import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts} from "ngx-echarts";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methane-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './methane-chart.component.html',
  styleUrl: './methane-chart.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class MethaneChartComponent implements OnInit{
  options!: EChartsOption;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMethane().subscribe( res => {
      const xAxisData = [];
      const data = [];

      for (let i = 0; i < res.methane.length; i++) {
        xAxisData.push(res.methane[i].date);
        data.push(res.methane[i].average);
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
          name: 'Cycles',
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
