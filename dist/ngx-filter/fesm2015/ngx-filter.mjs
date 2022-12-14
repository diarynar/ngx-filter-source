import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ViewChild, NgModule, Optional, SkipSelf } from '@angular/core';
import _ from 'lodash';
import * as i1 from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i5 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i7 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import * as i8 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i9 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as i3$1 from 'nowboard-icon';
import { NowboardIconModule } from 'nowboard-icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        const dataFilteredByEquality = _.filter(datas, filterResultEquality);
        const dataFilteredByDate = _.chain(dataFilteredByEquality).filter((data) => {
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
const searchGlobal = (datas, text) => {
    const result = datas.filter((data) => Object.values(data).some((val) => String(val).toLowerCase().includes(text.toLowerCase())));
    return { datas: result, filterConfig: text, type: 'text' };
};

function FilterComponent_ng_container_2_div_2_mat_option_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.????elementStart(0, "mat-option", 10);
        i0.????text(1);
        i0.????elementEnd();
    }
    if (rf & 2) {
        const option_r7 = ctx.$implicit;
        i0.????property("value", option_r7.value);
        i0.????advance(1);
        i0.????textInterpolate1(" ", option_r7.label, " ");
    }
}
function FilterComponent_ng_container_2_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.????getCurrentView();
        i0.????elementStart(0, "div", 5)(1, "mat-form-field", 6)(2, "mat-select", 7);
        i0.????listener("ngModelChange", function FilterComponent_ng_container_2_div_2_Template_mat_select_ngModelChange_2_listener($event) { i0.????restoreView(_r10); const item_r2 = i0.????nextContext().$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_div_2_Template_mat_select_ngModelChange_2_listener() { i0.????restoreView(_r10); const ctx_r11 = i0.????nextContext(2); return ctx_r11.onApplyFilter(); });
        i0.????elementStart(3, "mat-option", 8);
        i0.????text(4);
        i0.????elementEnd();
        i0.????template(5, FilterComponent_ng_container_2_div_2_mat_option_5_Template, 2, 2, "mat-option", 9);
        i0.????elementEnd()()();
    }
    if (rf & 2) {
        const item_r2 = i0.????nextContext().$implicit;
        i0.????property("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
        i0.????advance(2);
        i0.????property("ngModel", item_r2.filterData.value);
        i0.????advance(2);
        i0.????textInterpolate1(" ", item_r2.filterData.label, " ");
        i0.????advance(1);
        i0.????property("ngForOf", item_r2.filterData.options);
    }
}
function FilterComponent_ng_container_2_div_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = i0.????getCurrentView();
        i0.????elementStart(0, "div", 5)(1, "mat-form-field", 6)(2, "input", 11);
        i0.????listener("ngModelChange", function FilterComponent_ng_container_2_div_3_Template_input_ngModelChange_2_listener($event) { i0.????restoreView(_r16); const item_r2 = i0.????nextContext().$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_div_3_Template_input_ngModelChange_2_listener() { i0.????restoreView(_r16); const ctx_r17 = i0.????nextContext(2); return ctx_r17.onApplyFilter(); });
        i0.????elementEnd();
        i0.????element(3, "mat-datepicker-toggle", 12)(4, "mat-datepicker", null, 13);
        i0.????elementEnd()();
    }
    if (rf & 2) {
        const _r13 = i0.????reference(5);
        const item_r2 = i0.????nextContext().$implicit;
        i0.????property("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
        i0.????advance(2);
        i0.????propertyInterpolate("placeholder", item_r2.filterData == null ? null : item_r2.filterData.label);
        i0.????property("matDatepicker", _r13)("min", item_r2.filterData.max)("max", item_r2.filterData.max)("ngModel", item_r2.filterData.value);
        i0.????advance(1);
        i0.????property("for", _r13);
    }
}
function FilterComponent_ng_container_2_div_4_mat_icon_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.????elementStart(0, "mat-icon");
        i0.????text(1, "arrow_downward");
        i0.????elementEnd();
    }
}
function FilterComponent_ng_container_2_div_4_mat_icon_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.????elementStart(0, "mat-icon");
        i0.????text(1, "arrow_upward");
        i0.????elementEnd();
    }
}
function FilterComponent_ng_container_2_div_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.????getCurrentView();
        i0.????elementStart(0, "div", 5)(1, "div", 14);
        i0.????listener("click", function FilterComponent_ng_container_2_div_4_Template_div_click_1_listener() { i0.????restoreView(_r23); const item_r2 = i0.????nextContext().$implicit; const ctx_r21 = i0.????nextContext(); return ctx_r21.onSortChange(item_r2.filterData); });
        i0.????elementStart(2, "span", 15);
        i0.????text(3);
        i0.????elementEnd();
        i0.????template(4, FilterComponent_ng_container_2_div_4_mat_icon_4_Template, 2, 0, "mat-icon", 2);
        i0.????template(5, FilterComponent_ng_container_2_div_4_mat_icon_5_Template, 2, 0, "mat-icon", 2);
        i0.????elementEnd()();
    }
    if (rf & 2) {
        const item_r2 = i0.????nextContext().$implicit;
        i0.????property("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
        i0.????advance(3);
        i0.????textInterpolate(item_r2.filterData == null ? null : item_r2.filterData.label);
        i0.????advance(1);
        i0.????property("ngIf", item_r2.filterData.value === "asc");
        i0.????advance(1);
        i0.????property("ngIf", item_r2.filterData.value !== "asc");
    }
}
function FilterComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.????elementContainerStart(0);
        i0.????elementStart(1, "li", 3);
        i0.????template(2, FilterComponent_ng_container_2_div_2_Template, 6, 4, "div", 4);
        i0.????template(3, FilterComponent_ng_container_2_div_3_Template, 6, 7, "div", 4);
        i0.????template(4, FilterComponent_ng_container_2_div_4_Template, 6, 4, "div", 4);
        i0.????elementEnd();
        i0.????elementContainerEnd();
    }
    if (rf & 2) {
        const item_r2 = ctx.$implicit;
        i0.????advance(2);
        i0.????property("ngIf", item_r2.filterData.type === "select");
        i0.????advance(1);
        i0.????property("ngIf", item_r2.filterData.type === "date");
        i0.????advance(1);
        i0.????property("ngIf", item_r2.filterData.type === "sort");
    }
}
function FilterComponent_li_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = i0.????getCurrentView();
        i0.????elementStart(0, "li")(1, "button", 16);
        i0.????listener("click", function FilterComponent_li_3_Template_button_click_1_listener() { i0.????restoreView(_r26); const ctx_r25 = i0.????nextContext(); return ctx_r25.refresh(); });
        i0.????elementStart(2, "mat-icon");
        i0.????text(3, "refresh");
        i0.????elementEnd()()();
    }
}
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
        this.filterConfigBackup = _.cloneDeep(this.filterConfig);
    }
    onSortChange(item) {
        item.value = item.value === 'asc' ? "desc" : 'asc';
        this.datas.sort((a, b) => a[item.key] > b[item.key] ? (item.value === 'asc' ? 1 : -1) : (item.value === 'asc' ? -1 : 1));
        this.onApplyFilter();
    }
    ngOnChanges() {
    }
    refresh() {
        this.onRefresh.emit({ filterConfig: this.filterConfigBackup, datas: this.datas, type: 'group' });
    }
    onApplyFilter() {
        const filterResult = onApply(this.datas, this.filterConfig);
        this.onFilter.emit(filterResult);
    }
}
FilterComponent.??fac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(i0.????directiveInject(i1.DateAdapter)); };
FilterComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: FilterComponent, selectors: [["ngx-filter-group"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter", onRefresh: "onRefresh" }, features: [i0.????NgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "filter-item"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"], [1, "ngx-filter-title"], ["mat-mini-fab", "", 1, "ngx-refresh", 3, "click"]], template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.????elementStart(0, "div")(1, "ul", 0);
            i0.????template(2, FilterComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
            i0.????template(3, FilterComponent_li_3_Template, 4, 0, "li", 2);
            i0.????elementEnd()();
        }
        if (rf & 2) {
            i0.????advance(2);
            i0.????property("ngForOf", ctx.filterConfig);
            i0.????advance(1);
            i0.????property("ngIf", ctx.withRefresh);
        }
    }, directives: [i2.NgForOf, i2.NgIf, i2.NgClass, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon, i9.MatButton], styles: [".filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}  .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(FilterComponent, [{
            type: Component,
            args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <li class=\"filter-item\">\r\n        <div *ngIf=\"item.filterData.type==='select'\" [ngClass]=\"item.filterData?.class\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='date'\" [ngClass]=\"item.filterData?.class\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData?.class\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span class=\"ngx-filter-title\">{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul{list-style:none}\n"] }]
        }], function () { return [{ type: i1.DateAdapter }]; }, { filterConfig: [{
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
            }] });
})();

const _c0$1 = ["search"];
function ExpandableSearchComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.????getCurrentView();
        i0.????elementStart(0, "div", 3)(1, "input", 4, 5);
        i0.????listener("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.????restoreView(_r4); const ctx_r3 = i0.????nextContext(); return ctx_r3.searchText = $event; })("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.????restoreView(_r4); const ctx_r5 = i0.????nextContext(); return ctx_r5.searchUpdate.next($event); });
        i0.????elementEnd();
        i0.????elementStart(3, "nb-icon", 6);
        i0.????listener("click", function ExpandableSearchComponent_div_1_Template_nb_icon_click_3_listener() { i0.????restoreView(_r4); const ctx_r6 = i0.????nextContext(); return ctx_r6.onExpand(); });
        i0.????elementEnd()();
    }
    if (rf & 2) {
        const ctx_r0 = i0.????nextContext();
        i0.????advance(1);
        i0.????property("ngModel", ctx_r0.searchText)("placeholder", ctx_r0.placeholder);
        i0.????advance(2);
        i0.????property("icon", ctx_r0.closeIcon)("size", 1.5);
    }
}
function ExpandableSearchComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.????getCurrentView();
        i0.????elementStart(0, "div", 7);
        i0.????listener("click", function ExpandableSearchComponent_div_2_Template_div_click_0_listener() { i0.????restoreView(_r8); const ctx_r7 = i0.????nextContext(); return ctx_r7.onExpand(); });
        i0.????element(1, "nb-icon", 8);
        i0.????elementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.????nextContext();
        i0.????advance(1);
        i0.????property("icon", ctx_r1.icon)("size", 1.5);
    }
}
class ExpandableSearchComponent {
    constructor() {
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
ExpandableSearchComponent.??fac = function ExpandableSearchComponent_Factory(t) { return new (t || ExpandableSearchComponent)(); };
ExpandableSearchComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: ExpandableSearchComponent, selectors: [["ngx-expandable-search"]], viewQuery: function ExpandableSearchComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.????viewQuery(_c0$1, 5);
        }
        if (rf & 2) {
            let _t;
            i0.????queryRefresh(_t = i0.????loadQuery()) && (ctx.searchElement = _t.first);
        }
    }, inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch", onRefresh: "onRefresh" }, decls: 3, vars: 2, consts: [[1, "search-text-container"], ["class", "expanded-search", 4, "ngIf"], ["class", "not-expanded-search", 3, "click", 4, "ngIf"], [1, "expanded-search"], ["type", "text", 1, "search-input", 3, "ngModel", "placeholder", "ngModelChange"], ["search", ""], [3, "icon", "size", "click"], [1, "not-expanded-search", 3, "click"], [3, "icon", "size"]], template: function ExpandableSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.????elementStart(0, "div", 0);
            i0.????template(1, ExpandableSearchComponent_div_1_Template, 4, 4, "div", 1);
            i0.????template(2, ExpandableSearchComponent_div_2_Template, 2, 2, "div", 2);
            i0.????elementEnd();
        }
        if (rf & 2) {
            i0.????advance(1);
            i0.????property("ngIf", ctx.showField);
            i0.????advance(1);
            i0.????property("ngIf", !ctx.showField);
        }
    }, directives: [i2.NgIf, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i3$1.NowboardIconComponent], styles: ["[_nghost-%COMP%]{position:relative}.search-text-container[_ngcontent-%COMP%]{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{display:inline-flex}.search-text-container[_ngcontent-%COMP%]   .not-expanded-search[_ngcontent-%COMP%]{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;height:100%;outline:none;background:inherit}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{width:20px;cursor:pointer}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ExpandableSearchComponent, [{
            type: Component,
            args: [{ selector: 'ngx-expandable-search', template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"] }]
        }], function () { return []; }, { datas: [{
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
            }] });
})();

function AppComponent_ng_container_1_ngx_expandable_search_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.????getCurrentView();
        i0.????elementStart(0, "ngx-expandable-search", 6);
        i0.????listener("onSearch", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.????restoreView(_r5); const ctx_r4 = i0.????nextContext(2); return ctx_r4.onFilterData($event); })("onRefresh", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.????restoreView(_r5); const ctx_r6 = i0.????nextContext(2); return ctx_r6.refresh($event); });
        i0.????elementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.????nextContext(2);
        i0.????property("lang", ctx_r3.lang)("placeholder", ctx_r3.placeholder)("datas", ctx_r3.datas);
    }
}
function AppComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.????getCurrentView();
        i0.????elementContainerStart(0);
        i0.????elementStart(1, "ngx-filter-group", 4);
        i0.????listener("onFilter", function AppComponent_ng_container_1_Template_ngx_filter_group_onFilter_1_listener($event) { i0.????restoreView(_r8); const ctx_r7 = i0.????nextContext(); return ctx_r7.onFilterData($event); })("onRefresh", function AppComponent_ng_container_1_Template_ngx_filter_group_onRefresh_1_listener($event) { i0.????restoreView(_r8); const ctx_r9 = i0.????nextContext(); return ctx_r9.refresh($event); });
        i0.????elementEnd();
        i0.????elementStart(2, "div", 5);
        i0.????projection(3);
        i0.????template(4, AppComponent_ng_container_1_ngx_expandable_search_4_Template, 1, 3, "ngx-expandable-search", 3);
        i0.????elementEnd();
        i0.????elementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.????nextContext();
        i0.????advance(1);
        i0.????property("filterConfig", ctx_r0.filterConfig)("lang", ctx_r0.lang)("datas", ctx_r0.datas)("withRefresh", ctx_r0.withRefresh);
        i0.????advance(3);
        i0.????property("ngIf", ctx_r0.withGlobalSearch);
    }
}
function AppComponent_ngx_filter_group_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.????getCurrentView();
        i0.????elementStart(0, "ngx-filter-group", 4);
        i0.????listener("onFilter", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onFilter_0_listener($event) { i0.????restoreView(_r11); const ctx_r10 = i0.????nextContext(); return ctx_r10.onFilterData($event); })("onRefresh", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onRefresh_0_listener($event) { i0.????restoreView(_r11); const ctx_r12 = i0.????nextContext(); return ctx_r12.refresh($event); });
        i0.????elementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.????nextContext();
        i0.????property("filterConfig", ctx_r1.filterConfig)("lang", ctx_r1.lang)("datas", ctx_r1.datas)("withRefresh", ctx_r1.withRefresh);
    }
}
function AppComponent_ngx_expandable_search_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = i0.????getCurrentView();
        i0.????elementStart(0, "ngx-expandable-search", 6);
        i0.????listener("onSearch", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.????restoreView(_r14); const ctx_r13 = i0.????nextContext(); return ctx_r13.onFilterData($event); })("onRefresh", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.????restoreView(_r14); const ctx_r15 = i0.????nextContext(); return ctx_r15.refresh($event); });
        i0.????elementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.????nextContext();
        i0.????property("lang", ctx_r2.lang)("placeholder", ctx_r2.placeholder)("datas", ctx_r2.datas);
    }
}
const _c0 = ["*"];
class AppComponent {
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
                this.onFilter.emit(Object.assign(Object.assign({}, results), { filterConfig: e.filterConfig }));
            }
            else if (e.type === 'text') {
                this.configFilterGlobal = e.filterConfig;
                const results = onApply(e.datas, this.configFilterGroup);
                this.onFilter.emit(Object.assign(Object.assign({}, results), { filterConfig: e.filterConfig }));
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
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ i0.????defineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "ngx-filter-container"], [4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", 4, "ngIf"], [3, "lang", "placeholder", "datas", "onSearch", "onRefresh", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "ngx-filter-content-left"], [3, "lang", "placeholder", "datas", "onSearch", "onRefresh"]], template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.????projectionDef();
            i0.????elementStart(0, "div", 0);
            i0.????template(1, AppComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
            i0.????template(2, AppComponent_ngx_filter_group_2_Template, 1, 4, "ngx-filter-group", 2);
            i0.????template(3, AppComponent_ngx_expandable_search_3_Template, 1, 3, "ngx-expandable-search", 3);
            i0.????elementEnd();
        }
        if (rf & 2) {
            i0.????advance(1);
            i0.????property("ngIf", ctx.searchType === "search-full");
            i0.????advance(1);
            i0.????property("ngIf", ctx.searchType === "search-group");
            i0.????advance(1);
            i0.????property("ngIf", ctx.searchType === "search-text");
        }
    }, styles: [".ngx-filter-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container[_ngcontent-%COMP%]   .ngx-filter-content-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(AppComponent, [{
            type: Component,
            args: [{ selector: 'ngx-filter', template: "<div class=\"ngx-filter-container\">\r\n  <ng-container *ngIf=\"searchType==='search-full'\">\r\n    <ngx-filter-group [filterConfig]=\"filterConfig\" [lang]=\"lang\" (onFilter)=\"onFilterData($event)\"\r\n      (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n    </ngx-filter-group>\r\n    <div class=\"ngx-filter-content-left\">\r\n      <ng-content></ng-content>\r\n      <ngx-expandable-search *ngIf=\"withGlobalSearch\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n        [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n      </ngx-expandable-search>\r\n    </div>\r\n  </ng-container>\r\n  <ngx-filter-group *ngIf=\"searchType==='search-group'\" [filterConfig]=\"filterConfig\" [lang]=\"lang\"\r\n    (onFilter)=\"onFilterData($event)\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\" [withRefresh]=\"withRefresh\">\r\n  </ngx-filter-group>\r\n  <ngx-expandable-search *ngIf=\"searchType==='search-text'\" [lang]=\"lang\" (onSearch)=\"onFilterData($event)\"\r\n    [placeholder]=\"placeholder\" (onRefresh)=\"refresh($event)\" [datas]=\"datas\">\r\n  </ngx-expandable-search>\r\n</div>", styles: [".ngx-filter-container{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container .ngx-filter-content-left{display:flex;align-items:center;gap:15px}\n"] }]
        }], null, { filterConfig: [{
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
            }] });
})();

class FilterModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('FilterModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: FilterModule,
            providers: []
        };
    }
}
FilterModule.??fac = function FilterModule_Factory(t) { return new (t || FilterModule)(i0.????inject(FilterModule, 12)); };
FilterModule.??mod = /*@__PURE__*/ i0.????defineNgModule({ type: FilterModule });
FilterModule.??inj = /*@__PURE__*/ i0.????defineInjector({ providers: [MatDatepickerModule], imports: [[
            FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
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
        ]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(FilterModule, [{
            type: NgModule,
            args: [{
                    declarations: [
                        FilterComponent,
                        ExpandableSearchComponent,
                        AppComponent
                    ],
                    imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatButtonModule,
                        CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        FormsModule,
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
                    providers: [MatDatepickerModule],
                    exports: [
                        AppComponent,
                    ]
                }]
        }], function () {
        return [{ type: FilterModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    }, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.????setNgModuleScope(FilterModule, { declarations: [FilterComponent,
            ExpandableSearchComponent,
            AppComponent], imports: [FormsModule,
            MatFormFieldModule,
            MatButtonModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatIconModule,
            MatSelectModule,
            MatInputModule, i3$1.NowboardIconModule, MatTooltipModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatBottomSheetModule], exports: [AppComponent] });
})();
i0.????setComponentScope(AppComponent, [i2.NgIf, FilterComponent,
    ExpandableSearchComponent], []);

/*
 * Public API Surface of ngx-filter
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppComponent, ExpandableSearchComponent, FilterComponent, FilterModule };
//# sourceMappingURL=ngx-filter.mjs.map
