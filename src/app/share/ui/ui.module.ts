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
  NzMenuModule,
  NzSwitchModule,
} from 'ng-zorro-antd';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { EchartComponent } from './echart/echart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, SearchPanelComponent, EchartComponent, CardComponent],
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
  ],
  exports: [HeaderComponent, EchartComponent, CardComponent],
  entryComponents: [SearchPanelComponent],
})
export class UiModule { }
