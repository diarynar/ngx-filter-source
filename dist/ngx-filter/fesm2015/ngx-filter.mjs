import * as i1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ViewChild, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { filter, chain, cloneDeep } from 'lodash';
import * as i3 from 'nowboard-icon';
import { NowboardIconModule } from 'nowboard-icon';
import * as i1$1 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i3$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i7 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i8 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i9 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatTooltipModule } from '@angular/material/tooltip';

const onApply = (datas, filterConfig) => {
    try {
        const filterResultEquality = {};
        const filterResultDate = {};
        const filterResultSort = {};
        for (const { filterData } of filterConfig) {
            for (const key in filterData) {
                if (Object.prototype.hasOwnProperty.call(filterData, key) && filterData[key]) {
                    if (filterData["type"] === 'date') {
                        filterResultDate[`${filterData["key"]}-${filterData["operator"]}`] = {
                            operator: filterData["operator"],
                            value: filterData["value"],
                            key: filterData["key"]
                        };
                    }
                    else if (filterData["type"] === 'sort') {
                        filterResultSort[filterData["key"]] = filterData["value"];
                    }
                    else if (!!filterData["value"] || filterData["value"] === false) {
                        filterResultEquality[filterData["key"]] = filterData["value"];
                    }
                }
            }
        }
        const dataFilteredByEquality = filter(datas, filterResultEquality);
        const dataFilteredByDate = chain(dataFilteredByEquality).filter((data) => {
            let isTrue = true;
            for (const key in filterResultDate) {
                const dataDate = new Date(data[filterResultDate[key]['key']]);
                const filterDate = new Date(filterResultDate[key]["value"]);
                dataDate.setHours(0, 0, 0, 0);
                filterDate.setHours(0, 0, 0, 0);
                if (filterResultDate[key]["value"]) {
                    if (filterResultDate[key]["operator"] === 'gte' && dataDate.getTime() < filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'lte' && dataDate.getTime() > filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'eq' && dataDate.getTime() !== filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                }
            }
            return isTrue;
        }).value();
        return { filterConfig, datas: dataFilteredByDate, type: 'group' };
    }
    catch (error) {
        return { filter: {}, datas: [], type: 'group' };
    }
};
const searchGlobal = (datas, text = "") => {
    const result = datas.filter((data) => Object.values(data).some((val) => { var _a, _b; return (_b = (_a = String(val)) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(text === null || text === void 0 ? void 0 : text.toLowerCase()); }));
    return { datas: result, searchText: text, type: 'text' };
};

class ExpandableSearchComponent {
    constructor() {
        this.datas = [];
        this.searchsKey = [];
        this.placeholder = '';
        this.expandedWitdh = '396px';
        this.icon = 'search_1';
        this.closeIcon = 'close';
        this.closed = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.showField = false;
        this.searchText = "";
        this.searchUpdate = new Subject();
        // Debounce search.
        this.searchUpdate.pipe(debounceTime(500), distinctUntilChanged())
            .subscribe(value => {
            this.search(value);
        });
    }
    ngOnInit() {
    }
    onExpand() {
        this.showField = !this.showField;
        if (!this.showField) {
            this.searchText = "";
            this.search('');
        }
        else {
            setTimeout(() => {
                var _a, _b;
                (_b = (_a = this.searchElement) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.focus();
            }, 500);
        }
    }
    search(text) {
        const results = searchGlobal(this.datas, text);
        this.onSearch.emit(results);
    }
}
ExpandableSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ExpandableSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpandableSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch", onRefresh: "onRefresh" }, viewQueries: [{ propertyName: "searchElement", first: true, predicate: ["search"], descendants: true }], ngImport: i0, template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ExpandableSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-expandable-search', template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { datas: [{
                type: Input
            }], searchsKey: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], expandedWitdh: [{
                type: Input
            }], icon: [{
                type: Input
            }], closeIcon: [{
                type: Input
            }], closed: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onRefresh: [{
                type: Output
            }], searchElement: [{
                type: ViewChild,
                args: ['search']
            }] } });

class FilterComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.datas = [];
        this.onSort = new EventEmitter();
        this.onFilter = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.filterConfigBackup = [];
    }
    ngOnInit() {
        this.dateAdapter.setLocale(this.lang);
        this.filterConfigBackup = cloneDeep(this.filterConfig);
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    ngOnChanges() {
        console.log('----------this.filterConfig', this.filterConfig);
    }
    refresh() {
        this.onRefresh.emit({ filterConfig: this.filterConfigBackup, datas: this.datas, type: 'group' });
    }
    onApplyFilter() {
        const filterResult = onApply(this.datas, this.filterConfig);
        this.onFilter.emit(filterResult);
    }
}
FilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: FilterComponent, deps: [{ token: i1$1.DateAdapter }], target: i0.ɵɵFactoryTarget.Component });
FilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: FilterComponent, selector: "ngx-filter-group", inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter", onRefresh: "onRefresh" }, usesOnChanges: true, ngImport: i0, template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <div *ngIf=\"item.filterData.type==='divider'\" [ngClass]=\"'ngx-filter-divider '+ item.filterData.class\"\r\n        class=\"ngx-filter-divider\"></div>\r\n      <li *ngIf=\"item.filterData.type!=='divider'\" class=\"filter-item\" [ngClass]=\" item.filterData.class\">\r\n        <div *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <input matInput placeholder=\"{{item.filterData.label}}\" [matDatepicker]=\"picker\"\r\n              [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData.class\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span class=\"ngx-filter-title\">{{item.filterData.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\" class=\"ngx-refresh-container\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{align-items:center;gap:10px;margin:0;padding:0;position:relative}::ng-deep .filter-container .filter-item{display:inline-block;align-items:center;margin-left:10px;margin-bottom:10px}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}::ng-deep .filter-container .mat-form-field-appearance-outline .mat-form-field-outline{color:#0000!important}::ng-deep .filter-container .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,::ng-deep .filter-container .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:1em!important}::ng-deep .filter-container .mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(0)!important}::ng-deep .filter-container .ngx-refresh-container{display:inline-block;margin-left:10px}ul{list-style:none}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3$1.MatSuffix, selector: "[matSuffix]" }, { kind: "component", type: i4.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i5.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i1$1.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i9.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i9.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i9.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: FilterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <div *ngIf=\"item.filterData.type==='divider'\" [ngClass]=\"'ngx-filter-divider '+ item.filterData.class\"\r\n        class=\"ngx-filter-divider\"></div>\r\n      <li *ngIf=\"item.filterData.type!=='divider'\" class=\"filter-item\" [ngClass]=\" item.filterData.class\">\r\n        <div *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <input matInput placeholder=\"{{item.filterData.label}}\" [matDatepicker]=\"picker\"\r\n              [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData.class\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span class=\"ngx-filter-title\">{{item.filterData.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\" class=\"ngx-refresh-container\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{align-items:center;gap:10px;margin:0;padding:0;position:relative}::ng-deep .filter-container .filter-item{display:inline-block;align-items:center;margin-left:10px;margin-bottom:10px}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}::ng-deep .filter-container .mat-form-field-appearance-outline .mat-form-field-outline{color:#0000!important}::ng-deep .filter-container .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,::ng-deep .filter-container .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:1em!important}::ng-deep .filter-container .mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(0)!important}::ng-deep .filter-container .ngx-refresh-container{display:inline-block;margin-left:10px}ul{list-style:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.DateAdapter }]; }, propDecorators: { filterConfig: [{
                type: Input
            }], lang: [{
                type: Input
            }], withRefresh: [{
                type: Input
            }], datas: [{
                type: Input
            }], onSort: [{
                type: Output
            }], onFilter: [{
                type: Output
            }], onRefresh: [{
                type: Output
            }] } });

class NgxFilterLibraryComponent {
    constructor() {
        this.filterConfig = [];
        this.lang = "fr";
        this.withRefresh = true;
        this.withGlobalSearch = true;
        this.placeholder = "";
        this.searchType = 'search-full';
        this.datas = [];
        this.onFilter = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.configFilterGroup = [];
        this.configFilterGlobal = '';
        this.filterConfigRefresh = "";
    }
    ngOnInit() {
        setTimeout(() => {
            this.filterConfigRefresh = JSON.stringify(this.filterConfig);
        }, 2000);
    }
    onFilterData(e) {
        if (this.searchType === 'search-full') {
            if (e.type === 'group') {
                this.configFilterGroup = e.filterConfig;
                const results = searchGlobal(e.datas, this.configFilterGlobal);
                this.onFilter.emit(Object.assign(Object.assign({}, results), { filterConfig: this.configFilterGroup || e.filterConfig, searchInput: this.searchInput }));
            }
            else if (e.type === 'text') {
                this.configFilterGlobal = e.filterConfig;
                this.searchInput = (e === null || e === void 0 ? void 0 : e.searchText) || '';
                const results = onApply(e.datas, this.configFilterGroup);
                this.onFilter.emit(Object.assign(Object.assign({}, results), { filterConfig: this.configFilterGroup, searchInput: this.searchInput }));
            }
        }
        else {
            this.onFilter.emit(e);
        }
    }
    refresh(e) {
        if (this.searchType === 'search-full') {
            if (e.type === 'group') {
                this.configFilterGroup = [];
                this.onFilterData(e);
                this.onRefresh.emit(e);
                this.filterConfig = JSON.parse(this.filterConfigRefresh);
            }
            else {
                this.configFilterGlobal = "";
                this.onFilterData(e);
            }
        }
        else {
            this.onRefresh.emit(Object.assign(Object.assign({}, e), { datas: this.datas }));
        }
    }
}
NgxFilterLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxFilterLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: NgxFilterLibraryComponent, selector: "ngx-filter", inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngImport: i0, template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:flex-start;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"], dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: FilterComponent, selector: "ngx-filter-group", inputs: ["filterConfig", "lang", "withRefresh", "datas"], outputs: ["onSort", "onFilter", "onRefresh"] }, { kind: "component", type: ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: ["datas", "searchsKey", "placeholder", "expandedWitdh", "icon", "closeIcon"], outputs: ["closed", "onSearch", "onRefresh"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-filter', template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:flex-start;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"] }]
        }], propDecorators: { filterConfig: [{
                type: Input
            }], lang: [{
                type: Input
            }], withRefresh: [{
                type: Input
            }], withGlobalSearch: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], searchType: [{
                type: Input
            }], datas: [{
                type: Input
            }], onFilter: [{
                type: Output
            }], onRefresh: [{
                type: Output
            }] } });

class NgxFilterModule {
    static forRoot() {
        return {
            ngModule: NgxFilterModule,
            providers: []
        };
    }
}
NgxFilterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFilterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, declarations: [NgxFilterLibraryComponent,
        FilterComponent,
        ExpandableSearchComponent], imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule, i3.NowboardIconModule, MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule], exports: [NgxFilterLibraryComponent] });
NgxFilterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, imports: [FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        NowboardIconModule.forRoot({
            disabled_color: "#5E7290",
            primary: "#001B66"
        }),
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatBottomSheetModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: NgxFilterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxFilterLibraryComponent,
                        FilterComponent,
                        ExpandableSearchComponent,
                    ],
                    imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                        MatSelectModule,
                        MatInputModule,
                        NowboardIconModule.forRoot({
                            disabled_color: "#5E7290",
                            primary: "#001B66"
                        }),
                        MatTooltipModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatBottomSheetModule
                    ],
                    exports: [
                        NgxFilterLibraryComponent,
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-filter
 */
// export * from './lib/components/expandable-search/expandable-search.component'
// export * from './lib/components/filter-group/filter.component'

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFilterLibraryComponent, NgxFilterModule };
//# sourceMappingURL=ngx-filter.mjs.map
