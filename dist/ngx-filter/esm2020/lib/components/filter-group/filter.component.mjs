import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from 'lodash';
import { onApply } from '../../utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/datepicker";
function FilterComponent_ng_container_2_div_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r7.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r7.label, " ");
} }
function FilterComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "mat-form-field", 6)(2, "mat-select", 7);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_div_2_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r10); const item_r2 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r2.filterData.value = $event); })("ngModelChange", function FilterComponent_ng_container_2_div_2_Template_mat_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r11.onApplyFilter()); });
    i0.ɵɵelementStart(3, "mat-option", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_div_2_mat_option_5_Template, 2, 2, "mat-option", 9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r2.filterData.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r2.filterData.options);
} }
function FilterComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "mat-form-field", 6)(2, "input", 11);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_div_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r16); const item_r2 = i0.ɵɵnextContext().$implicit; return i0.ɵɵresetView(item_r2.filterData.value = $event); })("ngModelChange", function FilterComponent_ng_container_2_div_3_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r17.onApplyFilter()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker-toggle", 12)(4, "mat-datepicker", null, 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r13 = i0.ɵɵreference(5);
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵproperty("matDatepicker", _r13)("min", item_r2.filterData.max)("max", item_r2.filterData.max)("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r13);
} }
function FilterComponent_ng_container_2_div_4_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_downward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_div_4_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_upward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 14);
    i0.ɵɵlistener("click", function FilterComponent_ng_container_2_div_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r23); const item_r2 = i0.ɵɵnextContext().$implicit; const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.onSortChange(item_r2.filterData)); });
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_div_4_mat_icon_4_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_div_4_mat_icon_5_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value !== "asc");
} }
function FilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 3);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_div_2_Template, 6, 4, "div", 4);
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_div_3_Template, 6, 7, "div", 4);
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_div_4_Template, 6, 4, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "sort");
} }
function FilterComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 16);
    i0.ɵɵlistener("click", function FilterComponent_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.refresh()); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "refresh");
    i0.ɵɵelementEnd()()();
} }
export class FilterComponent {
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
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter-group"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter", onRefresh: "onRefresh" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "filter-item"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "filter-item-inner", 3, "click"], [1, "ngx-filter-title"], ["mat-mini-fab", "", 1, "ngx-refresh", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 5, 3, "ng-container", 1);
        i0.ɵɵtemplate(3, FilterComponent_li_3_Template, 4, 0, "li", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withRefresh);
    } }, dependencies: [i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.MatFormField, i3.MatSuffix, i4.MatButton, i5.NgClass, i5.NgForOf, i5.NgIf, i6.MatIcon, i7.MatSelect, i1.MatOption, i8.MatInput, i9.MatDatepicker, i9.MatDatepickerInput, i9.MatDatepickerToggle], styles: [".filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}  .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter-group', template: "<div>\n  <ul class=\"filter-container\">\n    <ng-container *ngFor=\"let item of filterConfig\">\n      <li class=\"filter-item\">\n        <div *ngIf=\"item.filterData.type==='select'\" [ngClass]=\"item.filterData?.class\">\n          <mat-form-field appearance=\"text\">\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\n              <mat-option value=\"\"> {{item.filterData.label}}\n              </mat-option>\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"item.filterData.type==='date'\" [ngClass]=\"item.filterData?.class\">\n          <mat-form-field appearance=\"text\">\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\n              (ngModelChange)=\"onApplyFilter()\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData?.class\">\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\n            <span class=\"ngx-filter-title\">{{item.filterData?.label}}</span>\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\n          </div>\n        </div>\n      </li>\n    </ng-container>\n    <li *ngIf=\"withRefresh\">\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\n        <mat-icon>refresh</mat-icon>\n      </button>\n    </li>\n  </ul>\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul{list-style:none}\n"] }]
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7QUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7SUNJOUIsc0NBQWtGO0lBQUMsWUFDbkY7SUFBQSxpQkFBYTs7O0lBREQsdUNBQXNCO0lBQWlELGVBQ25GO0lBRG1GLGdEQUNuRjs7OztJQU5OLDhCQUFnRix3QkFBQSxvQkFBQTtJQUVoRSxpTkFBYSxpREFBNkIsSUFBUCxxTEFBa0IsZUFBQSx1QkFBZSxDQUFBLElBQWpDO0lBQzdDLHFDQUFxQjtJQUFDLFlBQ3RCO0lBQUEsaUJBQWE7SUFDYixtR0FDYTtJQUNmLGlCQUFhLEVBQUEsRUFBQTs7O0lBUDRCLHNGQUFrQztJQUUvRCxlQUFtQztJQUFuQyxrREFBbUM7SUFDdkIsZUFDdEI7SUFEc0IseURBQ3RCO0lBQ3NELGVBQTBCO0lBQTFCLG9EQUEwQjs7OztJQUt0Riw4QkFBOEUsd0JBQUEsZ0JBQUE7SUFHaEIsNE1BQWEsaURBQzdFLElBRG1HLGdMQUMxRSxlQUFBLHVCQUFlLENBQUEsSUFEMkQ7SUFEN0YsaUJBRW9DO0lBQ3BDLDRDQUF3RSwrQkFBQTtJQUUxRSxpQkFBaUIsRUFBQTs7OztJQVB3QixzRkFBa0M7SUFFekQsZUFBd0M7SUFBeEMscUdBQXdDO0lBQUMsb0NBQXdCLCtCQUFBLCtCQUFBLHFDQUFBO0lBR2hELGVBQWM7SUFBZCwwQkFBYzs7O0lBTy9DLGdDQUFnRDtJQUFBLDhCQUFjO0lBQUEsaUJBQVc7OztJQUN6RSxnQ0FBZ0Q7SUFBQSw0QkFBWTtJQUFBLGlCQUFXOzs7O0lBSjNFLDhCQUE4RSxjQUFBO0lBQzdDLHdOQUFTLGVBQUEsd0NBQTZCLENBQUEsSUFBQztJQUNwRSxnQ0FBK0I7SUFBQSxZQUEwQjtJQUFBLGlCQUFPO0lBQ2hFLCtGQUF5RTtJQUN6RSwrRkFBdUU7SUFDekUsaUJBQU0sRUFBQTs7O0lBTG1DLHNGQUFrQztJQUUxQyxlQUEwQjtJQUExQixrRkFBMEI7SUFDOUMsZUFBbUM7SUFBbkMseURBQW1DO0lBQ25DLGVBQW1DO0lBQW5DLHlEQUFtQzs7O0lBekJ0RCw2QkFBZ0Q7SUFDOUMsNkJBQXdCO0lBQ3RCLCtFQVNNO0lBQ04sK0VBUU07SUFDTiwrRUFNTTtJQUNSLGlCQUFLO0lBQ1AsMEJBQWU7OztJQTNCTCxlQUFxQztJQUFyQywyREFBcUM7SUFVckMsZUFBbUM7SUFBbkMseURBQW1DO0lBU25DLGVBQW1DO0lBQW5DLHlEQUFtQzs7OztJQVM3QywwQkFBd0IsaUJBQUE7SUFDbUIsNkpBQVMsZUFBQSxpQkFBUyxDQUFBLElBQUM7SUFDMUQsZ0NBQVU7SUFBQSx1QkFBTztJQUFBLGlCQUFXLEVBQUEsRUFBQTs7QUR0QnBDLE1BQU0sT0FBTyxlQUFlO0lBUTFCLFlBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQVB4QyxpQkFBWSxHQUEyQixFQUFFLENBQUE7UUFDekMsU0FBSSxHQUFXLElBQUksQ0FBQTtRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQTtRQUNsQixVQUFLLEdBQVUsRUFBRSxDQUFBO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2hDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFBO1FBRzdDLHVCQUFrQixHQUFHLEVBQUUsQ0FBQTtJQUR2QixDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFJO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RCLENBQUM7SUFDRCxXQUFXO0lBRVgsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDbEcsQ0FBQztJQUVELGFBQWE7UUFDWCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7OEVBakNVLGVBQWU7a0VBQWYsZUFBZTtRQ1o1QiwyQkFBSyxZQUFBO1FBRUQsa0ZBNkJlO1FBQ2YsOERBSUs7UUFDUCxpQkFBSyxFQUFBOztRQW5DNEIsZUFBZTtRQUFmLDBDQUFlO1FBOEJ6QyxlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRHBCYixlQUFlO2NBTDNCLFNBQVM7MkJBQ0Usa0JBQWtCOzhEQUtuQixZQUFZO2tCQUFwQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgSUZpbHRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMtYXBpJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCB7IG9uQXBwbHkgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1maWx0ZXItZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJ2ZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmaWx0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcbiAgQElucHV0KCkgd2l0aFJlZnJlc2ggPSB0cnVlXG4gIEBJbnB1dCgpIGRhdGFzOiBhbnlbXSA9IFtdXG4gIEBPdXRwdXQoKSBvblNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55Pikge1xuICB9XG4gIGZpbHRlckNvbmZpZ0JhY2t1cCA9IFtdXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5sYW5nKTtcbiAgICB0aGlzLmZpbHRlckNvbmZpZ0JhY2t1cCA9IF8uY2xvbmVEZWVwKHRoaXMuZmlsdGVyQ29uZmlnKVxuICB9XG5cbiAgb25Tb3J0Q2hhbmdlKGl0ZW0pIHtcbiAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyBcImRlc2NcIiA6ICdhc2MnXG4gICAgdGhpcy5kYXRhcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYVtpdGVtLmtleV0gPiBiW2l0ZW0ua2V5XSA/IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IDEgOiAtMSkgOiAoaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyAtMSA6IDEpKVxuICAgIHRoaXMub25BcHBseUZpbHRlcigpXG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG5cbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5vblJlZnJlc2guZW1pdCh7IGZpbHRlckNvbmZpZzogdGhpcy5maWx0ZXJDb25maWdCYWNrdXAsIGRhdGFzOiB0aGlzLmRhdGFzLCB0eXBlOiAnZ3JvdXAnIH0pXG4gIH1cblxuICBvbkFwcGx5RmlsdGVyKCkge1xuICAgIGNvbnN0IGZpbHRlclJlc3VsdCA9IG9uQXBwbHkodGhpcy5kYXRhcywgdGhpcy5maWx0ZXJDb25maWcpO1xuICAgIHRoaXMub25GaWx0ZXIuZW1pdChmaWx0ZXJSZXN1bHQpXG4gIH1cblxufVxuIiwiPGRpdj5cbiAgPHVsIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmlsdGVyQ29uZmlnXCI+XG4gICAgICA8bGkgY2xhc3M9XCJmaWx0ZXItaXRlbVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnR5cGU9PT0nc2VsZWN0J1wiIFtuZ0NsYXNzXT1cIml0ZW0uZmlsdGVyRGF0YT8uY2xhc3NcIj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiXCI+IHt7aXRlbS5maWx0ZXJEYXRhLmxhYmVsfX1cbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBpdGVtLmZpbHRlckRhdGEub3B0aW9uc1wiPiB7e29wdGlvbi5sYWJlbH19XG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J2RhdGUnXCIgW25nQ2xhc3NdPVwiaXRlbS5maWx0ZXJEYXRhPy5jbGFzc1wiPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwidGV4dFwiPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwie3tpdGVtLmZpbHRlckRhdGE/LmxhYmVsfX1cIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgICAgICAgICAgICBbbWluXT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbbWF4XT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbKG5nTW9kZWwpXT1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQXBwbHlGaWx0ZXIoKVwiPlxuICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzb3J0J1wiIFtuZ0NsYXNzXT1cIml0ZW0uZmlsdGVyRGF0YT8uY2xhc3NcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWl0ZW0taW5uZXJcIiAoY2xpY2spPVwib25Tb3J0Q2hhbmdlKGl0ZW0uZmlsdGVyRGF0YSlcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmd4LWZpbHRlci10aXRsZVwiPnt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlPT09J2FzYydcIj5hcnJvd19kb3dud2FyZDwvbWF0LWljb24+XG4gICAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudmFsdWUhPT0nYXNjJ1wiPmFycm93X3Vwd2FyZDwvbWF0LWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9saT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bGkgKm5nSWY9XCJ3aXRoUmVmcmVzaFwiPlxuICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY2xhc3M9XCJuZ3gtcmVmcmVzaFwiIChjbGljayk9XCJyZWZyZXNoKClcIj5cbiAgICAgICAgPG1hdC1pY29uPnJlZnJlc2g8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PiJdfQ==