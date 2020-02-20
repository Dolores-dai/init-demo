import { Component, OnInit } from '@angular/core';
import 'echarts';
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.less'],
})
export class EchartComponent implements OnInit {
  chartOption: EChartOption = {
    legend: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      icon: 'roundRect',
    },
    xAxis: {
      type: 'category',
      data: ['06.01', '06.15', '07.01', '07.15', '08.15', '09.01'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [128, 108, 118, 110, 100, 176, 140],
        type: 'line',
        itemStyle: { normal: { label: { show: true } } },
        smooth: true,
        areaStyle: {},
        markPoint: {
          symbol: 'circle',
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' },
          ],
        },
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
