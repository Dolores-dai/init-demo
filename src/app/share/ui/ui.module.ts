import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  NzAvatarModule,
  NzCardModule,
  NzIconModule,
  NzInputModule,
  NzLayoutModule,
  NzMenuModule, NzProgressModule,
  NzSwitchModule,
  NzTableModule, NzToolTipModule,
} from 'ng-zorro-antd';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { EchartComponent } from './echart/echart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { LineChartNg2Component } from './line-chart-ng2/line-chart-ng2.component';
import { ChartsModule } from 'ng2-charts';
import { LineChartNgxComponent } from './line-chart-ngx/line-chart-ngx.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchPanelComponent,
    EchartComponent,
    TableComponent,
    TableItemComponent,
    LineChartNg2Component,
    LineChartNgxComponent,
    TooltipComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NzInputModule,
    NzAvatarModule,
    NgxEchartsModule,
    NzCardModule,
    NzSwitchModule,
    FormsModule,
    NzTableModule,
    ChartsModule,
    NgxChartsModule,
    NzToolTipModule,
    NzProgressModule,
  ],
  exports: [
    HeaderComponent,
    EchartComponent,
    TableComponent,
    LineChartNg2Component,
    LineChartNgxComponent,
  ],
  entryComponents: [SearchPanelComponent],
})
export class UiModule {}
