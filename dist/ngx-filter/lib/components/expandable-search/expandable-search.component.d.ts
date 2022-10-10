import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ExpandableSearchComponent implements OnInit {
    datas: never[];
    searchsKey: never[];
    placeholder: string;
    expandedWitdh: string;
    icon: string;
    closeIcon: string;
    closed: EventEmitter<any>;
    onSearch: EventEmitter<any>;
    onRefresh: EventEmitter<any>;
    showField: boolean;
    searchText: string;
    searchUpdate: Subject<string>;
    searchElement: ElementRef | undefined;
    constructor();
    ngOnInit(): void;
    onExpand(): void;
    search(text: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpandableSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpandableSearchComponent, "ngx-expandable-search", never, { "datas": "datas"; "searchsKey": "searchsKey"; "placeholder": "placeholder"; "expandedWitdh": "expandedWitdh"; "icon": "icon"; "closeIcon": "closeIcon"; }, { "closed": "closed"; "onSearch": "onSearch"; "onRefresh": "onRefresh"; }, never, never, false>;
}
