import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ShareModule } from '../../share/share.module';
import { NzGridModule } from 'ng-zorro-antd';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DashboardComponent, DashboardItemComponent],
  exports: [
    DashboardComponent,
  ],
  imports: [
    ShareModule,
    DashboardRoutingModule,
    NzGridModule,
    CommonModule,
  ]
})
export class DashboardModule { }
