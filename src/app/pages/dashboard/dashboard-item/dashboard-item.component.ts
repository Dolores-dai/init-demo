import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.less']
})
export class DashboardItemComponent implements OnInit {
  @Input() content: string;
  @Input() button: string;
  @Input() path: [string, number];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  toPage(path) {
    this.router.navigate(path);
  }
}
