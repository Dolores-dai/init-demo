import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-line-chart-ngx',
  templateUrl: './line-chart-ngx.component.html',
  styleUrls: ['./line-chart-ngx.component.less'],
})
export class LineChartNgxComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 300];

  // options

  xAxis = true;
  yAxis = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  curveFunc = shape.curveCardinal;
  highlights;

  // pipe-grid
  single: any[];
  view2: any[] = [500, 400];

  colorScheme2 = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  constructor() {}

  ngOnInit(): void {
    this.multi = [
      {
        name: 'DSO',
        series: [
          {
            name: '06.01',
            value: 128,
          },
          {
            name: '06.15',
            value: 108,
          },
          {
            name: '07.01',
            value: 118,
          },
          {
            name: '07.15',
            value: 110,
          },
          {
            name: '08.01',
            value: 100,
          },
          {
            name: '08.15',
            value: 176,
          },
          {
            name: '09.01',
            value: 140,
          },
        ],
      },
    ];

    this.single = [
      {
        name: 'Germany',
        value: 8940000,
      },
      {
        name: 'USA',
        value: 5000000,
      },
      {
        name: 'France',
        value: 7200000,
      },
      {
        name: 'UK',
        value: 6200000,
      },
      {
        name: 'Italy',
        value: 4200000,
      },
      {
        name: 'Spain',
        value: 8200000,
      },
    ];
  }
}
