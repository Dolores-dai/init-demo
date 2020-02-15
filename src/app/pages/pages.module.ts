import { NgModule } from '@angular/core';
import { OpportunityDetailModule } from './opportunity-detail/opportunity-detail.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    OpportunityDetailModule
  ],
  exports: [
    HomeModule,
    OpportunityDetailModule
  ]
})
export class PagesModule {
}
