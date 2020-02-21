import { Component, OnInit } from '@angular/core';
import 'echarts';
import { select, Store } from '@ngrx/store';
import { markPoint } from '../../../store/actions';
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.less'],
})
export class EchartComponent implements OnInit {
  chartOption: EChartOption = {
    tooltip: {
      axisPointer: {
        type: 'cross'
      },
      trigger: 'item',
      position: 'top',
      triggerOn: 'mousemove|click',
      showDelay: 10,
      hideDelay: 100,
      enterable: true,
      backgroundColor: 'rgba(255,255,255,0)',
      padding: 0,
      formatter: params => {
        console.log('param', params);
        const overRoll = '176';
        const billed = '#db5157';
        const unbilled = '128';
        const cl = true;

        return '<div class="tooltip-container"\n' +
          '     style="text-align: center;width: 130px;height: 150px;border-radius: 16px;background-color: rgba(46, 68, 145, 0.8);font-family: PingFangSC, serif;font-size: 16px;font-weight: 300;font-stretch: normal;font-style: normal;line-height: 1.67;letter-spacing: normal;color: #ffffff;">\n' +
          '  <p class="title" style="width: 72px;height: 16px;text-align: center;padding-top: 20px;margin: 0 auto 33px;">\n' +
          '    15/07/2020</p>\n' +
          '  <div class="container" style="display: flex;justify-content: center;">\n' +
          '    <table style="display: flex">\n' +
          '      <thead>\n' +
          '      <tr>\n' +
          '        <td style="width: 44px;height: 16px;">Overall</td>\n' +
          '      </tr>\n' +
          '      <tr>\n' +
          '        <td style="width: 44px;height: 16px;">Billed</td>\n' +
          '      </tr>\n' +
          '      <tr>\n' +
          '        <td style="width: 44px;height: 16px;">Unbilled</td>\n' +
          '      </tr>\n' +
          '      </thead>\n' +
          '      <tbody>\n' +
          '      <tr>\n' +
          '        <td class="emphasis" >176</td>\n' +
          '      </tr>\n' +
          '      <tr>\n' +
          '        <td class="normal" style="color: #fad455;">48</td>\n' +
          '      </tr>\n' +
          '      <tr>\n' +
          '        <td class="emphasis" style="color: #db5157;">128</td>\n' +
          '      </tr>\n' +
          '      </tbody>\n' +
          '    </table>\n' +
          '  </div>\n' +
          '</div>';

      },
    },
    xAxis: {
      type: 'category',
      data: ['06.01', '06.15', '07.01', '07.15', '08.15', '09.01', '06.01', '06.15', '07.01', '07.15', '08.15', '09.01', '06.01', '06.15', '07.01', '07.15', '08.15', '09.01', '06.01', '06.15', '07.01', '07.15', '08.15', '09.01', '06.01', '06.15', '07.01', '07.15', '08.15', '09.01', '06.01', '06.15', '07.01', '07.15', '08.15', '09.01'],
    },
    yAxis: {
      type: 'value',
    },
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      left: '9%',
      bottom: -5,
      start: 30,
      end: 50, // 初始化滚动条
    }],
    series: [
      {
        data: [28, 1228, 1218, 110, 100, 176, 12140, 128, 108, 112128, 110, 100, 176, 140, 128, 108, 118,
          110, 100, 176, 140, 128, 108, 118, 110, 100, 176, 140, 128, 108, 118, 110, 100, 176, 140, 128, 108, 118, 110, 100, 176, 140],
        type: 'line',
        itemStyle: { normal: { label: { show: true } } },
        smooth: true,
        // areaStyle: {},
        markPoint: {
          symbol: 'circle',
          symbolSize: 10,
          label: {
            show: false,
          },

          itemStyle: {
            color: 'red',
          },
          data: [
            {
              coord: [1, 1228],
            }, {
              coord: [0, 30],
            },

          ],
        },
      },
    ],

  };
  style: any;
  hidden = true;

  constructor(private store$: Store<any>) {
  }

  ngOnInit() {
    this.style = { left: '390px', top: '22px' };
  }

  mouseHover$(e) {
    console.log('e', e);
    // this.hidden = false;
    // this.style.left = e.event.offsetX + 'px';
    // this.style.top = '-' + e.event.offsetY * 3 + 'px';
    this.store$.dispatch(markPoint());
    this.store$.pipe(select('chart')).subscribe(i => {
      this.chartOption = i;
      console.log('line', i);
    });
  }
}
