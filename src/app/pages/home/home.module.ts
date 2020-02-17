import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShareModule } from '../../share/share.module';
import { OpportunityModule } from '../opportunity/opportunity.module';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShareModule,
    OpportunityModule,
    DashboardModule,
    HomeRoutingModule,
  ],
  exports: [
    OpportunityModule,
    DashboardModule,
  ]
})
export class HomeModule { }
