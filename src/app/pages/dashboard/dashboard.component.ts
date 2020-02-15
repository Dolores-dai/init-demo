import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  dashboards = [{ content: 'MU Level DSO Dashboard' },
    { content: 'Account Level DSO Dashboard' },
    {content: 'Opportunity Level DSO Dashboard'}];
  path =  ['/opportunity', 2];

  constructor() { }

  ngOnInit() {

  }


}
