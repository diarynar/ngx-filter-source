import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { searchGlobal } from '../../utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "nowboard-icon";
const _c0 = ["search"];
function ExpandableSearchComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "input", 4, 5);
    i0.ɵɵlistener("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.searchText = $event; })("ngModelChange", function ExpandableSearchComponent_div_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.searchUpdate.next($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-icon", 6);
    i0.ɵɵlistener("click", function ExpandableSearchComponent_div_1_Template_nb_icon_click_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onExpand(); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText)("placeholder", ctx_r0.placeholder);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", ctx_r0.closeIcon)("size", 1.5);
} }
function ExpandableSearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵlistener("click", function ExpandableSearchComponent_div_2_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.onExpand(); });
    i0.ɵɵelement(1, "nb-icon", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r1.icon)("size", 1.5);
} }
export class ExpandableSearchComponent {
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
                this.searchElement?.nativeElement?.focus();
            }, 500);
        }
    }
    search(text) {
        const results = searchGlobal(this.datas, text);
        this.onSearch.emit(results);
    }
}
ExpandableSearchComponent.ɵfac = function ExpandableSearchComponent_Factory(t) { return new (t || ExpandableSearchComponent)(); };
ExpandableSearchComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpandableSearchComponent, selectors: [["ngx-expandable-search"]], viewQuery: function ExpandableSearchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchElement = _t.first);
    } }, inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch", onRefresh: "onRefresh" }, decls: 3, vars: 2, consts: [[1, "search-text-container"], ["class", "expanded-search", 4, "ngIf"], ["class", "not-expanded-search", 3, "click", 4, "ngIf"], [1, "expanded-search"], ["type", "text", 1, "search-input", 3, "ngModel", "placeholder", "ngModelChange"], ["search", ""], [3, "icon", "size", "click"], [1, "not-expanded-search", 3, "click"], [3, "icon", "size"]], template: function ExpandableSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ExpandableSearchComponent_div_1_Template, 4, 4, "div", 1);
        i0.ɵɵtemplate(2, ExpandableSearchComponent_div_2_Template, 2, 2, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showField);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.showField);
    } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i3.NowboardIconComponent], styles: ["[_nghost-%COMP%]{position:relative}.search-text-container[_ngcontent-%COMP%]{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{display:inline-flex}.search-text-container[_ngcontent-%COMP%]   .not-expanded-search[_ngcontent-%COMP%]{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;height:100%;outline:none;background:inherit}.search-text-container[_ngcontent-%COMP%]   .expanded-search[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{width:20px;cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpandableSearchComponent, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZmlsdGVyL3NyYy9saWIvY29tcG9uZW50cy9leHBhbmRhYmxlLXNlYXJjaC9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi9jb21wb25lbnRzL2V4cGFuZGFibGUtc2VhcmNoL2V4cGFuZGFibGUtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBK0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVELE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7O0lDSmhELDhCQUErQyxrQkFBQTtJQUNsQix5TkFBd0IsOEtBQTBCLGdDQUF5QixJQUFuRDtJQUFwRCxpQkFDeUM7SUFDekMsa0NBQThEO0lBQXJCLHVLQUFTLGlCQUFVLElBQUM7SUFBQyxpQkFBVSxFQUFBOzs7SUFGNUMsZUFBd0I7SUFBeEIsMkNBQXdCLG1DQUFBO0lBRTNDLGVBQWtCO0lBQWxCLHVDQUFrQixhQUFBOzs7O0lBRTVCLDhCQUF5RTtJQUF4QyxtS0FBUyxpQkFBVSxJQUFDO0lBQ3BELDZCQUE4QztJQUMvQyxpQkFBTTs7O0lBREksZUFBYTtJQUFiLGtDQUFhLGFBQUE7O0FES3hCLE1BQU0sT0FBTyx5QkFBeUI7SUEyQnBDO1FBbEJPLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBR3pCLGtCQUFhLEdBQVcsT0FBTyxDQUFDO1FBR2hDLFNBQUksR0FBVyxVQUFVLENBQUM7UUFHMUIsY0FBUyxHQUFXLE9BQU8sQ0FBQztRQUV6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6QyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxFQUFFLENBQUE7UUFDZixpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFJbkMsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNwQixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLG9CQUFvQixFQUFFLENBQUM7YUFDdEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUNoQjthQUFNO1lBQ0wsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUM3QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUVILENBQUM7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM3QixDQUFDOztrR0F6RFUseUJBQXlCOzRFQUF6Qix5QkFBeUI7Ozs7OztRQ1p0Qyw4QkFBbUM7UUFDbEMsMEVBSU07UUFDTiwwRUFFTTtRQUVQLGlCQUFNOztRQVR5QixlQUFlO1FBQWYsb0NBQWU7UUFLVSxlQUFnQjtRQUFoQixxQ0FBZ0I7O3VGRE0zRCx5QkFBeUI7Y0FMckMsU0FBUzsyQkFDRSx1QkFBdUI7c0NBTzFCLEtBQUs7a0JBRFgsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxXQUFXO2tCQURqQixLQUFLO1lBSUMsYUFBYTtrQkFEbkIsS0FBSztZQUlDLElBQUk7a0JBRFYsS0FBSztZQUlDLFNBQVM7a0JBRGYsS0FBSztZQUdJLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxTQUFTO2tCQUFsQixNQUFNO1lBSWMsYUFBYTtrQkFBakMsU0FBUzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBzZWFyY2hHbG9iYWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHBhbmRhYmxlLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuZGFibGUtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGF0YXM6IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZWFyY2hzS2V5OiBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBleHBhbmRlZFdpdGRoOiBzdHJpbmcgPSAnMzk2cHgnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpY29uOiBzdHJpbmcgPSAnc2VhcmNoXzEnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjbG9zZUljb246IHN0cmluZyA9ICdjbG9zZSc7XHJcblxyXG4gIEBPdXRwdXQoKSBjbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBvblJlZnJlc2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgc2hvd0ZpZWxkID0gZmFsc2U7XHJcbiAgc2VhcmNoVGV4dCA9IFwiXCJcclxuICBzZWFyY2hVcGRhdGUgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoRWxlbWVudDogRWxlbWVudFJlZjtcclxuICBjb25zdHJ1Y3RvcihcclxuICApIHtcclxuICAgIC8vIERlYm91bmNlIHNlYXJjaC5cclxuICAgIHRoaXMuc2VhcmNoVXBkYXRlLnBpcGUoXHJcbiAgICAgIGRlYm91bmNlVGltZSg1MDApLFxyXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaCh2YWx1ZSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG9uRXhwYW5kKCkge1xyXG4gICAgdGhpcy5zaG93RmllbGQgPSAhdGhpcy5zaG93RmllbGQ7XHJcbiAgICBpZiAoIXRoaXMuc2hvd0ZpZWxkKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuc2VhcmNoKCcnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hFbGVtZW50Py5uYXRpdmVFbGVtZW50Py5mb2N1cygpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hHbG9iYWwodGhpcy5kYXRhcywgdGV4dClcclxuICAgIHRoaXMub25TZWFyY2guZW1pdChyZXN1bHRzKVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInNlYXJjaC10ZXh0LWNvbnRhaW5lclwiPlxyXG5cdDxkaXYgY2xhc3M9XCJleHBhbmRlZC1zZWFyY2hcIiAqbmdJZj1cInNob3dGaWVsZFwiPlxyXG5cdFx0PGlucHV0IGNsYXNzPVwic2VhcmNoLWlucHV0XCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCIgI3NlYXJjaCAobmdNb2RlbENoYW5nZSk9XCJzZWFyY2hVcGRhdGUubmV4dCgkZXZlbnQpXCJcclxuXHRcdFx0W3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgdHlwZT1cInRleHRcIj5cclxuXHRcdDxuYi1pY29uIFtpY29uXT1cImNsb3NlSWNvblwiIFtzaXplXT1cIjEuNVwiIChjbGljayk9XCJvbkV4cGFuZCgpXCI+PC9uYi1pY29uPlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJub3QtZXhwYW5kZWQtc2VhcmNoXCIgKGNsaWNrKT1cIm9uRXhwYW5kKClcIiAqbmdJZj1cIiFzaG93RmllbGRcIj5cclxuXHRcdDxuYi1pY29uIFtpY29uXT1cImljb25cIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XHJcblx0PC9kaXY+XHJcblxyXG48L2Rpdj4iXX0=