import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { onApply, searchGlobal } from './utils/utils';

import { IFilterConfiguration } from '../public-api';
import _ from 'lodash'

@Component({
  selector: 'ngx-filter',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() filterConfig: IFilterConfiguration[] = []
  @Input() lang: string = "fr"
  @Input() withRefresh = true
  @Input() withGlobalSearch = true
  @Input() placeholder = ""
  @Input() searchType: 'search-group' | 'search-text' | 'search-full' = 'search-full'
  @Input() datas: any[] = []
  @Output() onFilter = new EventEmitter<any>()
  @Output() onRefresh = new EventEmitter<any>()
  configFilterGroup = [];
  configFilterGlobal = '';
  filterConfigRefresh = ""
  ngOnInit() {
    setTimeout(() => {
      this.filterConfigRefresh = JSON.stringify(this.filterConfig)
    }, 2000);
  }
  onFilterData(e) {
    if (this.searchType === 'search-full') {
      if (e.type === 'group') {
        this.configFilterGroup = e.filterConfig;
        const results = searchGlobal(e.datas, this.configFilterGlobal);
        this.onFilter.emit({ ...results, filterConfig: e.filterConfig });
      } else if (e.type === 'text') {
        this.configFilterGlobal = e.filterConfig;
        const results = onApply(e.datas, this.configFilterGroup);
        this.onFilter.emit({ ...results, filterConfig: e.filterConfig });
      }
    } else {
      this.onFilter.emit(e);
    }
  }
  refresh(e) {
    if (this.searchType === 'search-full') {
      if (e.type === 'group') {
        this.configFilterGroup = [];
        this.onFilterData(e)
        this.onRefresh.emit(e)
        this.filterConfig = JSON.parse(this.filterConfigRefresh)
      } else {
        this.configFilterGlobal = "";
        this.onFilterData(e)
      }
    } else {
      this.onRefresh.emit({ ...e, datas: this.datas })
    }
  }

}
