import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../../types/search-result.type';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.less']
})
export class SearchPanelComponent implements OnInit {
  searchResult: SearchResult;

  constructor() { }

  ngOnInit() {
  }

}
