import { Component, OnInit } from '@angular/core';

interface Router {
  hover: boolean,
  title: string,
  path: string,
  collapsedTitle: string
}

@Component({
  selector: 'app-home-demo',
  templateUrl: './home-demo.component.html',
  styleUrls: ['./home-demo.component.less'],
})
export class HomeDemoComponent implements OnInit {
  isCollapsed = false;
  routers: Router[] = [{
    hover: false,
    title: 'DSO',
    path: 'dso',
    collapsedTitle: 'DSO',
  }, {
    hover: false,
    title: 'Opportunity Without PO',
    path: 'po',
    collapsedTitle: 'Opp...',
  }, {
    hover: false,
    title: 'Milestone Overdue',
    path: 'milestone',
    collapsedTitle: 'Mil...',
  }, {
    hover: false,
    title: 'Invoice Overdue',
    path: 'invoice',
    collapsedTitle: 'Inv...',
  }];
  hover = false;

  constructor() {
  }

  ngOnInit() {
  }

}
