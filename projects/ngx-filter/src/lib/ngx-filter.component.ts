import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { onApply, searchGlobal } from './utils/utils';

import { IFilterConfiguration } from '../public-api';

@Component({
  selector: 'ngx-filter',
  templateUrl: 'ngx-filter.component.html',
  styleUrls: ['ngx-filter.component.scss']
})
export class NgxFilterLibraryComponent implements OnInit {
  @Input() filterConfig: IFilterConfiguration[] = []
  @Input() lang: string = "fr"
  @Input() withRefresh = true
  @Input() withGlobalSearch = true
  @Input() placeholder = ""
  @Input() searchType: 'search-group' | 'search-text' | 'search-full' = 'search-full'
  @Input() datas: any = []
  @Output() onFilter = new EventEmitter<any>()
  @Output() onRefresh = new EventEmitter<any>()
  configFilterGroup = [];
  configFilterGlobal = '';
  filterConfigRefresh = ""
  searchInput: any;
  ngOnInit() {
    setTimeout(() => {
      this.filterConfigRefresh = JSON.stringify(this.filterConfig)
    }, 2000);
  }

  onFilterData(e: any) {
    if (this.searchType === 'search-full') {
      if (e.type === 'group') {
        this.configFilterGroup = e.filterConfig;
        const results = searchGlobal(e.datas, this.configFilterGlobal);
        this.onFilter.emit({ ...results, filterConfig: this.configFilterGroup || e.filterConfig, searchInput: this.searchInput });
      } else if (e.type === 'text') {
        this.configFilterGlobal = e.filterConfig;
        this.searchInput = e?.searchText || ''
        const results = onApply(e.datas, this.configFilterGroup);
        this.onFilter.emit({ ...results, filterConfig: this.configFilterGroup, searchInput: this.searchInput });
      }
    } else {
      this.onFilter.emit(e);
    }
  }
  refresh(e: any) {
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
