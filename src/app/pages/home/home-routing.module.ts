import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '?opportunity',
        loadChildren: () => import('../opportunity/opportunity.module').then(model => model.OpportunityModule)
      },
      {
        path: '?dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(model => model.DashboardModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
