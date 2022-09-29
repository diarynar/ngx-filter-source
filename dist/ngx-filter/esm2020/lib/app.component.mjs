import { Component, EventEmitter, Input, Output } from '@angular/core';
import { onApply, searchGlobal } from './utils/utils';
import * as i0 from "@angular/core";
function AppComponent_ng_container_1_ngx_expandable_search_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 6);
    i0.ɵɵlistener("onSearch", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.onFilterData($event); })("onRefresh", function AppComponent_ng_container_1_ngx_expandable_search_4_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("lang", ctx_r3.lang)("placeholder", ctx_r3.placeholder)("datas", ctx_r3.datas);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ngx-filter-group", 4);
    i0.ɵɵlistener("onFilter", function AppComponent_ng_container_1_Template_ngx_filter_group_onFilter_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onFilterData($event); })("onRefresh", function AppComponent_ng_container_1_Template_ngx_filter_group_onRefresh_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.refresh($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵprojection(3);
    i0.ɵɵtemplate(4, AppComponent_ng_container_1_ngx_expandable_search_4_Template, 1, 3, "ngx-expandable-search", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("filterConfig", ctx_r0.filterConfig)("lang", ctx_r0.lang)("datas", ctx_r0.datas)("withRefresh", ctx_r0.withRefresh);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.withGlobalSearch);
} }
function AppComponent_ngx_filter_group_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-filter-group", 4);
    i0.ɵɵlistener("onFilter", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onFilter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onFilterData($event); })("onRefresh", function AppComponent_ngx_filter_group_2_Template_ngx_filter_group_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("filterConfig", ctx_r1.filterConfig)("lang", ctx_r1.lang)("datas", ctx_r1.datas)("withRefresh", ctx_r1.withRefresh);
} }
function AppComponent_ngx_expandable_search_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-expandable-search", 6);
    i0.ɵɵlistener("onSearch", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onSearch_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onFilterData($event); })("onRefresh", function AppComponent_ngx_expandable_search_3_Template_ngx_expandable_search_onRefresh_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.refresh($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("lang", ctx_r2.lang)("placeholder", ctx_r2.placeholder)("datas", ctx_r2.datas);
} }
const _c0 = ["*"];
export class AppComponent {
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
                this.onFilter.emit(results);
            }
            else if (e.type === 'text') {
                this.configFilterGlobal = e.filterConfig;
                const results = onApply(e.datas, this.configFilterGroup);
                this.onFilter.emit(results);
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
            this.onRefresh.emit({ ...e, datas: this.datas });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-filter"]], inputs: { filterConfig: "filterConfig", lang: "lang", withRefresh: "withRefresh", withGlobalSearch: "withGlobalSearch", placeholder: "placeholder", searchType: "searchType", datas: "datas" }, outputs: { onFilter: "onFilter", onRefresh: "onRefresh" }, ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[1, "ngx-filter-container"], [4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh", 4, "ngIf"], [3, "lang", "placeholder", "datas", "onSearch", "onRefresh", 4, "ngIf"], [3, "filterConfig", "lang", "datas", "withRefresh", "onFilter", "onRefresh"], [1, "ngx-filter-content-left"], [3, "lang", "placeholder", "datas", "onSearch", "onRefresh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, AppComponent_ng_container_1_Template, 5, 5, "ng-container", 1);
        i0.ɵɵtemplate(2, AppComponent_ngx_filter_group_2_Template, 1, 4, "ngx-filter-group", 2);
        i0.ɵɵtemplate(3, AppComponent_ngx_expandable_search_3_Template, 1, 3, "ngx-expandable-search", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-full");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-group");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.searchType === "search-text");
    } }, styles: [".ngx-filter-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:15px}.ngx-filter-container[_ngcontent-%COMP%]   .ngx-filter-content-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlci9zcmMvbGliL2FwcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9hcHAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztJQ01oRCxnREFDNEU7SUFEZCxzTkFBWSwyQkFBb0IsSUFBQywyTUFDcEQsc0JBQWUsSUFEcUM7SUFFL0YsaUJBQXdCOzs7SUFGd0Isa0NBQWEsbUNBQUEsdUJBQUE7Ozs7SUFOakUsNkJBQWlEO0lBQy9DLDJDQUM0RTtJQURkLHdMQUFZLDJCQUFvQixJQUFDLDZLQUNoRixzQkFBZSxJQURpRTtJQUUvRixpQkFBbUI7SUFDbkIsOEJBQXFDO0lBQ25DLGtCQUF5QjtJQUN6QixnSEFFd0I7SUFDMUIsaUJBQU07SUFDUiwwQkFBZTs7O0lBVEssZUFBNkI7SUFBN0Isa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBO0lBS3JCLGVBQXNCO0lBQXRCLDhDQUFzQjs7OztJQUtsRCwyQ0FDOEc7SUFBNUcsOExBQVksNEJBQW9CLElBQUMsbUxBQWMsdUJBQWUsSUFBN0I7SUFDbkMsaUJBQW1COzs7SUFGbUMsa0RBQTZCLHFCQUFBLHVCQUFBLG1DQUFBOzs7O0lBR25GLGdEQUM0RTtJQURKLHdNQUFZLDRCQUFvQixJQUFDLDZMQUM5RCx1QkFBZSxJQUQrQztJQUV6RyxpQkFBd0I7OztJQUZrQyxrQ0FBYSxtQ0FBQSx1QkFBQTs7O0FESnpFLE1BQU0sT0FBTyxZQUFZO0lBTHpCO1FBTVcsaUJBQVksR0FBMkIsRUFBRSxDQUFBO1FBQ3pDLFNB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QUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb25BcHBseSwgc2VhcmNoR2xvYmFsIH0gZnJvbSAnLi91dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBJRmlsdGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmlsdGVyQ29uZmlnOiBJRmlsdGVyQ29uZmlndXJhdGlvbltdID0gW11cclxuICBASW5wdXQoKSBsYW5nOiBzdHJpbmcgPSBcImZyXCJcclxuICBASW5wdXQoKSB3aXRoUmVmcmVzaCA9IHRydWVcclxuICBASW5wdXQoKSB3aXRoR2xvYmFsU2VhcmNoID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gXCJcIlxyXG4gIEBJbnB1dCgpIHNlYXJjaFR5cGU6ICdzZWFyY2gtZ3JvdXAnIHwgJ3NlYXJjaC10ZXh0JyB8ICdzZWFyY2gtZnVsbCcgPSAnc2VhcmNoLWZ1bGwnXHJcbiAgQElucHV0KCkgZGF0YXM6IGFueVtdID0gW11cclxuICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIEBPdXRwdXQoKSBvblJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKVxyXG4gIGNvbmZpZ0ZpbHRlckdyb3VwID0gW107XHJcbiAgY29uZmlnRmlsdGVyR2xvYmFsID0gJyc7XHJcbiAgZmlsdGVyQ29uZmlnUmVmcmVzaCA9IFwiXCJcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2ggPSBKU09OLnN0cmluZ2lmeSh0aGlzLmZpbHRlckNvbmZpZylcclxuICAgIH0sIDIwMDApO1xyXG4gIH1cclxuICBvbkZpbHRlckRhdGEoZSkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoVHlwZSA9PT0gJ3NlYXJjaC1mdWxsJykge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAnZ3JvdXAnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IGUuZmlsdGVyQ29uZmlnO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hHbG9iYWwoZS5kYXRhcywgdGhpcy5jb25maWdGaWx0ZXJHbG9iYWwpO1xyXG4gICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdChyZXN1bHRzKTtcclxuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnRmlsdGVyR2xvYmFsID0gZS5maWx0ZXJDb25maWc7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IG9uQXBwbHkoZS5kYXRhcywgdGhpcy5jb25maWdGaWx0ZXJHcm91cCk7XHJcbiAgICAgICAgdGhpcy5vbkZpbHRlci5lbWl0KHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9uRmlsdGVyLmVtaXQoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlZnJlc2goZSkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoVHlwZSA9PT0gJ3NlYXJjaC1mdWxsJykge1xyXG4gICAgICBpZiAoZS50eXBlID09PSAnZ3JvdXAnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHcm91cCA9IFtdO1xyXG4gICAgICAgIHRoaXMub25GaWx0ZXJEYXRhKGUpXHJcbiAgICAgICAgdGhpcy5vblJlZnJlc2guZW1pdChlKVxyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLmZpbHRlckNvbmZpZ1JlZnJlc2gpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdGaWx0ZXJHbG9iYWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMub25GaWx0ZXJEYXRhKGUpXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25SZWZyZXNoLmVtaXQoeyAuLi5lLCBkYXRhczogdGhpcy5kYXRhcyB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm5neC1maWx0ZXItY29udGFpbmVyXCI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlYXJjaFR5cGU9PT0nc2VhcmNoLWZ1bGwnXCI+XHJcbiAgICA8bmd4LWZpbHRlci1ncm91cCBbZmlsdGVyQ29uZmlnXT1cImZpbHRlckNvbmZpZ1wiIFtsYW5nXT1cImxhbmdcIiAob25GaWx0ZXIpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gICAgICAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiIFt3aXRoUmVmcmVzaF09XCJ3aXRoUmVmcmVzaFwiPlxyXG4gICAgPC9uZ3gtZmlsdGVyLWdyb3VwPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC1maWx0ZXItY29udGVudC1sZWZ0XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPG5neC1leHBhbmRhYmxlLXNlYXJjaCAqbmdJZj1cIndpdGhHbG9iYWxTZWFyY2hcIiBbbGFuZ109XCJsYW5nXCIgKG9uU2VhcmNoKT1cIm9uRmlsdGVyRGF0YSgkZXZlbnQpXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiAob25SZWZyZXNoKT1cInJlZnJlc2goJGV2ZW50KVwiIFtkYXRhc109XCJkYXRhc1wiPlxyXG4gICAgICA8L25neC1leHBhbmRhYmxlLXNlYXJjaD5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxuZ3gtZmlsdGVyLWdyb3VwICpuZ0lmPVwic2VhcmNoVHlwZT09PSdzZWFyY2gtZ3JvdXAnXCIgW2ZpbHRlckNvbmZpZ109XCJmaWx0ZXJDb25maWdcIiBbbGFuZ109XCJsYW5nXCJcclxuICAgIChvbkZpbHRlcik9XCJvbkZpbHRlckRhdGEoJGV2ZW50KVwiIChvblJlZnJlc2gpPVwicmVmcmVzaCgkZXZlbnQpXCIgW2RhdGFzXT1cImRhdGFzXCIgW3dpdGhSZWZyZXNoXT1cIndpdGhSZWZyZXNoXCI+XHJcbiAgPC9uZ3gtZmlsdGVyLWdyb3VwPlxyXG4gIDxuZ3gtZXhwYW5kYWJsZS1zZWFyY2ggKm5nSWY9XCJzZWFyY2hUeXBlPT09J3NlYXJjaC10ZXh0J1wiIFtsYW5nXT1cImxhbmdcIiAob25TZWFyY2gpPVwib25GaWx0ZXJEYXRhKCRldmVudClcIlxyXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgKG9uUmVmcmVzaCk9XCJyZWZyZXNoKCRldmVudClcIiBbZGF0YXNdPVwiZGF0YXNcIj5cclxuICA8L25neC1leHBhbmRhYmxlLXNlYXJjaD5cclxuPC9kaXY+Il19