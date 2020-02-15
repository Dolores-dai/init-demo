import { NgModule } from '@angular/core';
import { OpportunityDetailRoutingModule } from './opportunity-detail-routing.module';
import { OpportunityDetailComponent } from './opportunity-detail.component';
import { ShareModule } from '../../share/share.module';


@NgModule({
  declarations: [OpportunityDetailComponent],
  imports: [
    ShareModule,
    OpportunityDetailRoutingModule
  ]
})
export class OpportunityDetailModule { }
