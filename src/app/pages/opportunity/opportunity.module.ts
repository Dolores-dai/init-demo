import { NgModule } from '@angular/core';
import { OpportunityComponent } from './opportunity.component';
import { ShareModule } from '../../share/share.module';
import { OpportunityRoutingModule } from './opportunity-routing.module';
import { NzGridModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [OpportunityComponent],
  exports: [
    OpportunityComponent
  ],
  imports: [
    ShareModule,
    OpportunityRoutingModule,
    NzGridModule
  ]
})
export class OpportunityModule { }
