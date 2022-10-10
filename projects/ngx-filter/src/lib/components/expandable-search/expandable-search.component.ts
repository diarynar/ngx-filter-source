import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

import { Subject } from 'rxjs';
import { searchGlobal } from '../../utils/utils';

@Component({
  selector: 'ngx-expandable-search',
  templateUrl: './expandable-search.component.html',
  styleUrls: ['./expandable-search.component.scss']
})
export class ExpandableSearchComponent implements OnInit {

  @Input()
  public datas = [];

  @Input()
  public searchsKey = [];

  @Input()
  public placeholder: string = '';

  @Input()
  public expandedWitdh: string = '396px';

  @Input()
  public icon: string = 'search_1';

  @Input()
  public closeIcon: string = 'close';

  @Output() closed = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  @Output() onRefresh = new EventEmitter();
  showField = false;
  searchText = ""
  searchUpdate = new Subject<string>();
  @ViewChild('search') searchElement: ElementRef | undefined;
  constructor(
  ) {
    // Debounce search.
    this.searchUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.search(value)
      });
  }

  ngOnInit(): void {
  }

  onExpand() {
    this.showField = !this.showField;
    if (!this.showField) {
      this.searchText = "";
      this.search('')
    } else {
      setTimeout(() => {
        this.searchElement?.nativeElement?.focus();
      }, 500);
    }

  }

  search(text: string) {
    const results = searchGlobal(this.datas, text)
    this.onSearch.emit(results)
  }

}
