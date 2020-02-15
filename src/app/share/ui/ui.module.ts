import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NzAvatarModule, NzIconModule, NzInputModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { EchartComponent } from './echart/echart.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [HeaderComponent, SearchPanelComponent, EchartComponent],
  imports: [
    RouterModule,
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule,
    NzInputModule,
    NzAvatarModule,
    NgxEchartsModule
  ],
  exports: [HeaderComponent, EchartComponent],
  entryComponents: [SearchPanelComponent],
})
export class UiModule { }
