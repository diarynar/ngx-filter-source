import { EventEmitter, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { IFilterConfiguration } from '../../../public-api';
import * as i0 from "@angular/core";
export declare class FilterComponent implements OnInit {
    private dateAdapter;
    filterConfig: IFilterConfiguration[];
    lang: string;
    withRefresh: boolean;
    datas: any[];
    onSort: EventEmitter<any>;
    onFilter: EventEmitter<any>;
    onRefresh: EventEmitter<any>;
    constructor(dateAdapter: DateAdapter<any>);
    filterConfigBackup: any[];
    ngOnInit(): void;
    onSortChange(item: any): void;
    refresh(): void;
    onApplyFilter(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterComponent, "ngx-filter-group", never, { "filterConfig": "filterConfig"; "lang": "lang"; "withRefresh": "withRefresh"; "datas": "datas"; }, { "onSort": "onSort"; "onFilter": "onFilter"; "onRefresh": "onRefresh"; }, never, never>;
}
