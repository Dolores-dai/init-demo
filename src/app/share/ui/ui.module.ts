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
  NzSwitchModule, NzTableModule,
} from 'ng-zorro-antd';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { EchartComponent } from './echart/echart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';


@NgModule({
  declarations: [HeaderComponent, SearchPanelComponent, EchartComponent, TableComponent, TableItemComponent,],
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
  ],
  exports: [HeaderComponent, EchartComponent, TableComponent],
  entryComponents: [SearchPanelComponent],
})
export class UiModule { }
