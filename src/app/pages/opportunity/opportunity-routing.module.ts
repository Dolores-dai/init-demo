import { NgModule } from '@angular/core';
import { OpportunityComponent } from './opportunity.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '?opportunity',
    component: OpportunityComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OpportunityRoutingModule { }
