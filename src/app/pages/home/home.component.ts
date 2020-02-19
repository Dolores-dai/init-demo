import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  index = 0;
  title = ['DSO','Opportunity without PO','Milestone Overdue','Invoice Overdue'];
  paths = ['dso','opportunity','milestone','invoice'];

  constructor() { }

  ngOnInit() {
  }

}
