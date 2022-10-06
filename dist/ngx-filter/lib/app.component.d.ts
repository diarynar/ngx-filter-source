import { EventEmitter, OnInit } from '@angular/core';
import { IFilterConfiguration } from '../public-api';
import * as i0 from "@angular/core";
export declare class AppComponent implements OnInit {
    filterConfig: IFilterConfiguration[];
    lang: string;
    withRefresh: boolean;
    withGlobalSearch: boolean;
    placeholder: string;
    searchType: 'search-group' | 'search-text' | 'search-full';
    datas: any[];
    onFilter: EventEmitter<any>;
    onRefresh: EventEmitter<any>;
    configFilterGroup: any[];
    configFilterGlobal: string;
    filterConfigRefresh: string;
    ngOnInit(): void;
    onFilterData(e: any): void;
    refresh(e: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AppComponent, "ngx-filter", never, { "filterConfig": "filterConfig"; "lang": "lang"; "withRefresh": "withRefresh"; "withGlobalSearch": "withGlobalSearch"; "placeholder": "placeholder"; "searchType": "searchType"; "datas": "datas"; }, { "onFilter": "onFilter"; "onRefresh": "onRefresh"; }, never, ["*"], false>;
}
