import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DateAdapter } from '@angular/material/core';
import { IFilterConfiguration } from '../../../public-api';
import _ from 'lodash'
import { onApply } from '../../utils/utils';

@Component({
  selector: 'ngx-filter-group',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterConfig: IFilterConfiguration[] = []
  @Input() lang: string = "fr"
  @Input() withRefresh = true
  @Input() datas: any[] = []
  @Output() onSort = new EventEmitter<any>()
  @Output() onFilter = new EventEmitter<any>()
  @Output() onRefresh = new EventEmitter<any>()
  constructor(private dateAdapter: DateAdapter<any>) {
  }
  filterConfigBackup = []

  ngOnInit() {
    this.dateAdapter.setLocale(this.lang);
    this.filterConfigBackup = _.cloneDeep(this.filterConfig)
  }

  onSortChange(item) {
    item.value = item.value === 'asc' ? "desc" : 'asc'
    this.datas.sort((a: any, b: any) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1))
    this.onApplyFilter()
  }
  ngOnChanges() {

  }

  refresh() {
    this.onRefresh.emit({ filterConfig: this.filterConfigBackup, datas: this.datas, type: 'group' })
  }

  onApplyFilter() {
    const filterResult = onApply(this.datas, this.filterConfig);
    this.onFilter.emit(filterResult)
  }

}
