import { createReducer, on } from '@ngrx/store';
import { markPoint } from './actions';

export const initState = {
  tooltip: {
    trigger: 'axis',
    triggerOn: 'mousemove|click',
    showDelay: 10,
    hideDelay: 100,
    enterable: true,
    formatter: '<div>dddd</div>\n' +
      '<nz-progress _ngcontent-qpx-c4="" class="progress" nz-tooltip="" nztype="dashboard"\n' +
      '             ng-reflect-ng-style="[object Object]" ng-reflect-nz-title="3 done / 3 in progress / 4 to "\n' +
      '             ng-reflect-directive-name-title="" ng-reflect-nz-success-percent="30" ng-reflect-nz-percent="60"\n' +
      '             ng-reflect-nz-type="dashboard" style="left: 390px; top: 22px;"><!---->\n' +
      '  <div class="ant-progress ant-progress-status-normal ant-progress-show-info ant-progress-circle"\n' +
      '       ng-reflect-ng-class="ant-progress ant-progress-stat">\n' +
      '    <div class="ant-progress-inner ng-star-inserted" style="width: 132px; height: 132px; font-size: 25.8px;">\n' +
      '      <svg class="ant-progress-circle " viewBox="0 0 100 100">、\n' +
      '        <path class="ant-progress-circle-trail" fill-opacity="0" stroke="#f3f3f3" ng-reflect-ng-style="[object Object]"\n' +
      '              stroke-width="6" d="M 50,50 m 0,-47a 47,47 0 1 1 0,94a 47,47 0 1 1 0,-94"\n' +
      '              style="stroke-dasharray: 220.31px, 295.31px; stroke-dashoffset: -37.5px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s;"></path>\n' +
      '        <path class="ant-progress-circle-path ng-star-inserted" fill-opacity="0" ng-reflect-ng-style="[object Object]"\n' +
      '              d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke-linecap="round" stroke-width="6"\n' +
      '              style="transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s; stroke-dasharray: 132.186px, 295.31px; stroke-dashoffset: -37.5px;"></path>\n' +
      '        <path class="ant-progress-circle-path ng-star-inserted" fill-opacity="0" ng-reflect-ng-style="[object Object]"\n' +
      '              d="M 50,50 m 0,-47a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94" stroke-linecap="round" stroke-width="6"\n' +
      '              style="stroke: rgb(135, 208, 104); transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s; stroke-dasharray: 66.0929px, 295.31px; stroke-dashoffset: -37.5px;"></path>\n' +
      '      </svg>\n' +
      '      <span class="ant-progress-text ng-star-inserted">60%</span></div>\n' +
      '  </div>\n' +
      '</nz-progress>\'\n',
    axisPointer: {},
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
      data: [28, 1228, 1218, 110, 100, 176, 12140, 128, 108, 112128, 110, 100, 176, 140, 128, 108, 118, 110,
        100, 176, 140, 128, 108, 118, 110, 100, 176, 140, 128, 108, 118, 110, 100, 176, 140, 128, 108, 118, 110, 100, 176, 140],
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
        data: [],
      },
    },
  ],
};

const reducer = createReducer(initState,
  on(markPoint, state => {
    state.series.forEach(i => i.markPoint.data.push({ coord: [3, 22] }));
    return state;
  }));

export const chartReducer = (state, action) => {
  return reducer(state, action);
};

