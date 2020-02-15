import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../share/share.module';
import { OpportunityModule } from '../opportunity/opportunity.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NzGridModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    OpportunityModule,
    DashboardModule,
    HomeRoutingModule,
    NzGridModule
  ],
  exports: [
    OpportunityModule,
    DashboardModule,
  ]
})
export class HomeModule { }
