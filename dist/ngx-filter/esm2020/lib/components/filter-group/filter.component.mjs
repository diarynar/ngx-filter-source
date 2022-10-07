import { Component, EventEmitter, Input, Output } from '@angular/core';
import _ from 'lodash';
import { onApply } from '../../utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/datepicker";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/button";
function FilterComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", "ngx-filter-divider " + (item_r2.filterData == null ? null : item_r2.filterData.class));
} }
function FilterComponent_ng_container_2_li_2_div_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r10.label, " ");
} }
function FilterComponent_ng_container_2_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mat-form-field", 8)(2, "mat-select", 9);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_li_2_div_1_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r13); const item_r2 = i0.ɵɵnextContext(2).$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_li_2_div_1_Template_mat_select_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.onApplyFilter(); });
    i0.ɵɵelementStart(3, "mat-option", 10);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_li_2_div_1_mat_option_5_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r2.filterData.label, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r2.filterData.options);
} }
function FilterComponent_ng_container_2_li_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mat-form-field", 8)(2, "input", 13);
    i0.ɵɵlistener("ngModelChange", function FilterComponent_ng_container_2_li_2_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r19); const item_r2 = i0.ɵɵnextContext(2).$implicit; return item_r2.filterData.value = $event; })("ngModelChange", function FilterComponent_ng_container_2_li_2_div_2_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.onApplyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "mat-datepicker-toggle", 14)(4, "mat-datepicker", null, 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r16 = i0.ɵɵreference(5);
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵproperty("matDatepicker", _r16)("min", item_r2.filterData.max)("max", item_r2.filterData.max)("ngModel", item_r2.filterData.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r16);
} }
function FilterComponent_ng_container_2_li_2_div_3_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_downward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_li_2_div_3_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "arrow_upward");
    i0.ɵɵelementEnd();
} }
function FilterComponent_ng_container_2_li_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17);
    i0.ɵɵlistener("click", function FilterComponent_ng_container_2_li_2_div_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r26); const item_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onSortChange(item_r2.filterData); });
    i0.ɵɵelementStart(2, "span", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, FilterComponent_ng_container_2_li_2_div_3_mat_icon_4_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵtemplate(5, FilterComponent_ng_container_2_li_2_div_3_mat_icon_5_Template, 2, 0, "mat-icon", 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r2.filterData == null ? null : item_r2.filterData.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value === "asc");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.value !== "asc");
} }
function FilterComponent_ng_container_2_li_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, FilterComponent_ng_container_2_li_2_div_1_Template, 6, 3, "div", 2);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_li_2_div_2_Template, 6, 6, "div", 2);
    i0.ɵɵtemplate(3, FilterComponent_ng_container_2_li_2_div_3_Template, 6, 4, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", item_r2.filterData == null ? null : item_r2.filterData.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "sort");
} }
function FilterComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, FilterComponent_ng_container_2_div_1_Template, 1, 1, "div", 3);
    i0.ɵɵtemplate(2, FilterComponent_ng_container_2_li_2_Template, 4, 4, "li", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type === "divider");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r2.filterData.type !== "divider");
} }
function FilterComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 19);
    i0.ɵɵlistener("click", function FilterComponent_li_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.refresh(); });
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
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ngx-filter-group"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", datas: "datas" }, outputs: { onSort: "onSort", onFilter: "onFilter", onRefresh: "onRefresh" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 2, consts: [[1, "filter-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "ngx-filter-divider", 3, "ngClass", 4, "ngIf"], ["class", "filter-item", 3, "ngClass", 4, "ngIf"], [1, "ngx-filter-divider", 3, "ngClass"], [1, "filter-item", 3, "ngClass"], [3, "ngClass", 4, "ngIf"], ["appearance", "text"], [3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", 3, "placeholder", "matDatepicker", "min", "max", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "ngClass"], [1, "filter-item-inner", 3, "click"], [1, "ngx-filter-title"], ["mat-mini-fab", "", 1, "ngx-refresh", 3, "click"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div")(1, "ul", 0);
        i0.ɵɵtemplate(2, FilterComponent_ng_container_2_Template, 3, 2, "ng-container", 1);
        i0.ɵɵtemplate(3, FilterComponent_li_3_Template, 4, 0, "li", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.filterConfig);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.withRefresh);
    } }, directives: [i2.NgForOf, i2.NgIf, i2.NgClass, i3.MatFormField, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i1.MatOption, i6.MatInput, i7.MatDatepickerInput, i5.DefaultValueAccessor, i7.MatDatepickerToggle, i3.MatSuffix, i7.MatDatepicker, i8.MatIcon, i9.MatButton], styles: [".filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}  .filter-container .filter-item{display:flex;align-items:center}  .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}  .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}  .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}  .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}  .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}  .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul[_ngcontent-%COMP%]{list-style:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{ selector: 'ngx-filter-group', template: "<div>\r\n  <ul class=\"filter-container\">\r\n    <ng-container *ngFor=\"let item of filterConfig\">\r\n      <div *ngIf=\"item.filterData.type==='divider'\" [ngClass]=\"'ngx-filter-divider '+ item.filterData?.class\"\r\n        class=\"ngx-filter-divider\"></div>\r\n      <li *ngIf=\"item.filterData.type!=='divider'\" class=\"filter-item\" [ngClass]=\" item.filterData?.class\">\r\n        <div *ngIf=\"item.filterData.type==='select'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <mat-select [(ngModel)]=\"item.filterData.value\" (ngModelChange)=\"onApplyFilter()\">\r\n              <mat-option value=\"\"> {{item.filterData.label}}\r\n              </mat-option>\r\n              <mat-option [value]=\"option.value\" *ngFor=\"let option of item.filterData.options\"> {{option.label}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div *ngIf=\"item.filterData.type==='date'\">\r\n          <mat-form-field appearance=\"text\">\r\n            <input matInput placeholder=\"{{item.filterData?.label}}\" [matDatepicker]=\"picker\"\r\n              [min]=\"item.filterData.max\" [max]=\"item.filterData.max\" [(ngModel)]=\"item.filterData.value\"\r\n              (ngModelChange)=\"onApplyFilter()\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n        <div *ngIf=\"item.filterData.type==='sort'\" [ngClass]=\"item.filterData?.class\">\r\n          <div class=\"filter-item-inner\" (click)=\"onSortChange(item.filterData)\">\r\n            <span class=\"ngx-filter-title\">{{item.filterData?.label}}</span>\r\n            <mat-icon *ngIf=\"item.filterData.value==='asc'\">arrow_downward</mat-icon>\r\n            <mat-icon *ngIf=\"item.filterData.value!=='asc'\">arrow_upward</mat-icon>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"withRefresh\">\r\n      <button mat-mini-fab class=\"ngx-refresh\" (click)=\"refresh()\">\r\n        <mat-icon>refresh</mat-icon>\r\n      </button>\r\n    </li>\r\n  </ul>\r\n</div>", styles: ["::ng-deep .filter-container{display:flex;align-items:center;gap:10px;margin:0;padding:0}::ng-deep .filter-container .filter-item{display:flex;align-items:center}::ng-deep .filter-container .filter-item .mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:85px;padding:12px 15px;border-top:0}::ng-deep .filter-container .filter-item .mat-form-field-flex{display:inline-flex;align-items:center;box-sizing:border-box;width:100%;border-radius:50px;background:rgba(128,128,128,.517)}::ng-deep .filter-container .filter-item .mat-form-field-wrapper{padding-bottom:0}::ng-deep .filter-container .filter-item .filter-item-inner{border-radius:50px;background:rgba(128,128,128,.517);padding:8px 10px;display:inline-flex;align-items:center;box-sizing:border-box;cursor:pointer}::ng-deep .filter-container .filter-item .search-text .mat-form-field-infix{padding:8px 15px 8px 0}::ng-deep .filter-container .ngx-filter-title{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:2;-webkit-box-orient:vertical}ul{list-style:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZmlsdGVyLWdyb3VwL2ZpbHRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2ZpbHRlci1ncm91cC9maWx0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkvRSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7QUFDdEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7SUNGdEMseUJBQ21DOzs7SUFEVyxnSEFBeUQ7OztJQVEvRixzQ0FBa0Y7SUFBQyxZQUNuRjtJQUFBLGlCQUFhOzs7SUFERCx3Q0FBc0I7SUFBaUQsZUFDbkY7SUFEbUYsaURBQ25GOzs7O0lBTk4sMkJBQTZDLHdCQUFBLG9CQUFBO0lBRTdCLDRQQUFtQywwTEFBa0IsdUJBQWUsSUFBakM7SUFDN0Msc0NBQXFCO0lBQUMsWUFDdEI7SUFBQSxpQkFBYTtJQUNiLHlHQUNhO0lBQ2YsaUJBQWEsRUFBQSxFQUFBOzs7SUFMRCxlQUFtQztJQUFuQyxrREFBbUM7SUFDdkIsZUFDdEI7SUFEc0IseURBQ3RCO0lBQ3NELGVBQTBCO0lBQTFCLG9EQUEwQjs7OztJQU10RiwyQkFBMkMsd0JBQUEsZ0JBQUE7SUFHbUIsdVBBQW1DLHFMQUMxRSx1QkFBZSxJQUQyRDtJQUQ3RixpQkFFb0M7SUFDcEMsNENBQXdFLCtCQUFBO0lBRTFFLGlCQUFpQixFQUFBOzs7O0lBTEMsZUFBd0M7SUFBeEMscUdBQXdDO0lBQUMsb0NBQXdCLCtCQUFBLCtCQUFBLHFDQUFBO0lB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RCxhQUFhO1FBQ1gsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2xDLENBQUM7OzhFQWpDVSxlQUFlO2tFQUFmLGVBQWU7UUNaNUIsMkJBQUssWUFBQTtRQUVELGtGQWdDZTtRQUNmLDhEQUlLO1FBQ1AsaUJBQUssRUFBQTs7UUF0QzRCLGVBQWU7UUFBZiwwQ0FBZTtRQWlDekMsZUFBaUI7UUFBakIsc0NBQWlCOzt1RkR2QmIsZUFBZTtjQUwzQixTQUFTOzJCQUNFLGtCQUFrQjs4REFLbkIsWUFBWTtrQkFBcEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxNQUFNO2tCQUFmLE1BQU07WUFDRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IElGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vcHVibGljLWFwaSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuaW1wb3J0IHsgb25BcHBseSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWZpbHRlci1ncm91cCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdmaWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydmaWx0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWx0ZXJDb25maWc6IElGaWx0ZXJDb25maWd1cmF0aW9uW10gPSBbXVxyXG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZyA9IFwiZnJcIlxyXG4gIEBJbnB1dCgpIHdpdGhSZWZyZXNoID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIGRhdGFzOiBhbnlbXSA9IFtdXHJcbiAgQE91dHB1dCgpIG9uU29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgQE91dHB1dCgpIG9uRmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBAT3V0cHV0KCkgb25SZWZyZXNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KClcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+KSB7XHJcbiAgfVxyXG4gIGZpbHRlckNvbmZpZ0JhY2t1cCA9IFtdXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5sYW5nKTtcclxuICAgIHRoaXMuZmlsdGVyQ29uZmlnQmFja3VwID0gXy5jbG9uZURlZXAodGhpcy5maWx0ZXJDb25maWcpXHJcbiAgfVxyXG5cclxuICBvblNvcnRDaGFuZ2UoaXRlbSkge1xyXG4gICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUgPT09ICdhc2MnID8gXCJkZXNjXCIgOiAnYXNjJ1xyXG4gICAgdGhpcy5kYXRhcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYVtpdGVtLmtleV0gPiBiW2l0ZW0ua2V5XSA/IChpdGVtLnZhbHVlID09PSAnYXNjJyA/IDEgOiAtMSkgOiAoaXRlbS52YWx1ZSA9PT0gJ2FzYycgPyAtMSA6IDEpKVxyXG4gICAgdGhpcy5vbkFwcGx5RmlsdGVyKClcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIHRoaXMub25SZWZyZXNoLmVtaXQoeyBmaWx0ZXJDb25maWc6IHRoaXMuZmlsdGVyQ29uZmlnQmFja3VwLCBkYXRhczogdGhpcy5kYXRhcywgdHlwZTogJ2dyb3VwJyB9KVxyXG4gIH1cclxuXHJcbiAgb25BcHBseUZpbHRlcigpIHtcclxuICAgIGNvbnN0IGZpbHRlclJlc3VsdCA9IG9uQXBwbHkodGhpcy5kYXRhcywgdGhpcy5maWx0ZXJDb25maWcpO1xyXG4gICAgdGhpcy5vbkZpbHRlci5lbWl0KGZpbHRlclJlc3VsdClcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPHVsIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWx0ZXJDb25maWdcIj5cclxuICAgICAgPGRpdiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS50eXBlPT09J2RpdmlkZXInXCIgW25nQ2xhc3NdPVwiJ25neC1maWx0ZXItZGl2aWRlciAnKyBpdGVtLmZpbHRlckRhdGE/LmNsYXNzXCJcclxuICAgICAgICBjbGFzcz1cIm5neC1maWx0ZXItZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICA8bGkgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZSE9PSdkaXZpZGVyJ1wiIGNsYXNzPVwiZmlsdGVyLWl0ZW1cIiBbbmdDbGFzc109XCIgaXRlbS5maWx0ZXJEYXRhPy5jbGFzc1wiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzZWxlY3QnXCI+XHJcbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInRleHRcIj5cclxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJpdGVtLmZpbHRlckRhdGEudmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJvbkFwcGx5RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIlwiPiB7e2l0ZW0uZmlsdGVyRGF0YS5sYWJlbH19XHJcbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGl0ZW0uZmlsdGVyRGF0YS5vcHRpb25zXCI+IHt7b3B0aW9uLmxhYmVsfX1cclxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdkYXRlJ1wiPlxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7aXRlbS5maWx0ZXJEYXRhPy5sYWJlbH19XCIgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCJcclxuICAgICAgICAgICAgICBbbWluXT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbbWF4XT1cIml0ZW0uZmlsdGVyRGF0YS5tYXhcIiBbKG5nTW9kZWwpXT1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25BcHBseUZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLmZpbHRlckRhdGEudHlwZT09PSdzb3J0J1wiIFtuZ0NsYXNzXT1cIml0ZW0uZmlsdGVyRGF0YT8uY2xhc3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItaXRlbS1pbm5lclwiIChjbGljayk9XCJvblNvcnRDaGFuZ2UoaXRlbS5maWx0ZXJEYXRhKVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5neC1maWx0ZXItdGl0bGVcIj57e2l0ZW0uZmlsdGVyRGF0YT8ubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPG1hdC1pY29uICpuZ0lmPVwiaXRlbS5maWx0ZXJEYXRhLnZhbHVlPT09J2FzYydcIj5hcnJvd19kb3dud2FyZDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cIml0ZW0uZmlsdGVyRGF0YS52YWx1ZSE9PSdhc2MnXCI+YXJyb3dfdXB3YXJkPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bGkgKm5nSWY9XCJ3aXRoUmVmcmVzaFwiPlxyXG4gICAgICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjbGFzcz1cIm5neC1yZWZyZXNoXCIgKGNsaWNrKT1cInJlZnJlc2goKVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5yZWZyZXNoPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PiJdfQ==