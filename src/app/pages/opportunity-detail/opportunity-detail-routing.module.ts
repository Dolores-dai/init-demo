import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunityDetailComponent } from './opportunity-detail.component';

const routes: Routes = [
  {
    path: 'opportunity/:id',
    component: OpportunityDetailComponent,
    data: {
      title: '详细中心'
    },
    resolve: {

    }
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
export class OpportunityDetailRoutingModule { }
