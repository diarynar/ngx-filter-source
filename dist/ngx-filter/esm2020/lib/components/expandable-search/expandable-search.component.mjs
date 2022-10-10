import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Subject } from 'rxjs';
import { searchGlobal } from '../../utils/utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "nowboard-icon";
export class ExpandableSearchComponent {
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
                this.searchElement?.nativeElement?.focus();
            }, 500);
        }
    }
    search(text) {
        const results = searchGlobal(this.datas, text);
        this.onSearch.emit(results);
    }
}
ExpandableSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.5", ngImport: i0, type: ExpandableSearchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpandableSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.5", type: ExpandableSearchComponent, selector: "ngx-expandable-search", inputs: { datas: "datas", searchsKey: "searchsKey", placeholder: "placeholder", expandedWitdh: "expandedWitdh", icon: "icon", closeIcon: "closeIcon" }, outputs: { closed: "closed", onSearch: "onSearch", onRefresh: "onRefresh" }, viewQueries: [{ propertyName: "searchElement", first: true, predicate: ["search"], descendants: true }], ngImport: i0, template: "<div class=\"search-text-container\">\r\n\t<div class=\"expanded-search\" *ngIf=\"showField\">\r\n\t\t<input class=\"search-input\" [(ngModel)]=\"searchText\" #search (ngModelChange)=\"searchUpdate.next($event)\"\r\n\t\t\t[placeholder]=\"placeholder\" type=\"text\">\r\n\t\t<nb-icon [icon]=\"closeIcon\" [size]=\"1.5\" (click)=\"onExpand()\"></nb-icon>\r\n\t</div>\r\n\t<div class=\"not-expanded-search\" (click)=\"onExpand()\" *ngIf=\"!showField\">\r\n\t\t<nb-icon [icon]=\"icon\" [size]=\"1.5\"></nb-icon>\r\n\t</div>\r\n\r\n</div>", styles: [":host{position:relative}.search-text-container{background:rgba(201,198,198,.857);border-radius:8px;display:inline-block}.search-text-container nb-icon{display:inline-flex}.search-text-container .not-expanded-search{width:52px;height:42px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.search-text-container .expanded-search{height:42px;display:flex;align-items:center;padding:0 10px;gap:10px}.search-text-container .expanded-search input{border:none;height:100%;outline:none;background:inherit}.search-text-container .expanded-search nb-icon{width:20px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1zZWFyY2gvZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci9zcmMvbGliL2NvbXBvbmVudHMvZXhwYW5kYWJsZS1zZWFyY2gvZXhwYW5kYWJsZS1zZWFyY2guY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQU9qRCxNQUFNLE9BQU8seUJBQXlCO0lBMkJwQztRQXhCTyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBR1gsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUdoQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUd6QixrQkFBYSxHQUFXLE9BQU8sQ0FBQztRQUdoQyxTQUFJLEdBQVcsVUFBVSxDQUFDO1FBRzFCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFFekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsRUFBRSxDQUFBO1FBQ2YsaUJBQVksR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBSW5DLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDcEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixvQkFBb0IsRUFBRSxDQUFDO2FBQ3RCLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDaEI7YUFBTTtZQUNMLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDN0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFFSCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDakIsTUFBTSxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDN0IsQ0FBQzs7c0hBekRVLHlCQUF5QjswR0FBekIseUJBQXlCLDJZQ1h0Qyx1aEJBVU07MkZEQ08seUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLHVCQUF1QjswRUFPMUIsS0FBSztzQkFEWCxLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBSUMsV0FBVztzQkFEakIsS0FBSztnQkFJQyxhQUFhO3NCQURuQixLQUFLO2dCQUlDLElBQUk7c0JBRFYsS0FBSztnQkFJQyxTQUFTO3NCQURmLEtBQUs7Z0JBR0ksTUFBTTtzQkFBZixNQUFNO2dCQUNHLFFBQVE7c0JBQWpCLE1BQU07Z0JBQ0csU0FBUztzQkFBbEIsTUFBTTtnQkFJYyxhQUFhO3NCQUFqQyxTQUFTO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzZWFyY2hHbG9iYWwgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHBhbmRhYmxlLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2V4cGFuZGFibGUtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9leHBhbmRhYmxlLXNlYXJjaC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFeHBhbmRhYmxlU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGF0YXMgPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2VhcmNoc0tleSA9IFtdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGV4cGFuZGVkV2l0ZGg6IHN0cmluZyA9ICczOTZweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGljb246IHN0cmluZyA9ICdzZWFyY2hfMSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNsb3NlSWNvbjogc3RyaW5nID0gJ2Nsb3NlJztcclxuXHJcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgb25TZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uUmVmcmVzaCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzaG93RmllbGQgPSBmYWxzZTtcclxuICBzZWFyY2hUZXh0ID0gXCJcIlxyXG4gIHNlYXJjaFVwZGF0ZSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbGVtZW50OiBFbGVtZW50UmVmIHwgdW5kZWZpbmVkO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICkge1xyXG4gICAgLy8gRGVib3VuY2Ugc2VhcmNoLlxyXG4gICAgdGhpcy5zZWFyY2hVcGRhdGUucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKDUwMCksXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXHJcbiAgICAgIC5zdWJzY3JpYmUodmFsdWUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoKHZhbHVlKVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgb25FeHBhbmQoKSB7XHJcbiAgICB0aGlzLnNob3dGaWVsZCA9ICF0aGlzLnNob3dGaWVsZDtcclxuICAgIGlmICghdGhpcy5zaG93RmllbGQpIHtcclxuICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gXCJcIjtcclxuICAgICAgdGhpcy5zZWFyY2goJycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNlYXJjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKHRleHQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IHNlYXJjaEdsb2JhbCh0aGlzLmRhdGFzLCB0ZXh0KVxyXG4gICAgdGhpcy5vblNlYXJjaC5lbWl0KHJlc3VsdHMpXHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2VhcmNoLXRleHQtY29udGFpbmVyXCI+XHJcblx0PGRpdiBjbGFzcz1cImV4cGFuZGVkLXNlYXJjaFwiICpuZ0lmPVwic2hvd0ZpZWxkXCI+XHJcblx0XHQ8aW5wdXQgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiAjc2VhcmNoIChuZ01vZGVsQ2hhbmdlKT1cInNlYXJjaFVwZGF0ZS5uZXh0KCRldmVudClcIlxyXG5cdFx0XHRbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiB0eXBlPVwidGV4dFwiPlxyXG5cdFx0PG5iLWljb24gW2ljb25dPVwiY2xvc2VJY29uXCIgW3NpemVdPVwiMS41XCIgKGNsaWNrKT1cIm9uRXhwYW5kKClcIj48L25iLWljb24+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cIm5vdC1leHBhbmRlZC1zZWFyY2hcIiAoY2xpY2spPVwib25FeHBhbmQoKVwiICpuZ0lmPVwiIXNob3dGaWVsZFwiPlxyXG5cdFx0PG5iLWljb24gW2ljb25dPVwiaWNvblwiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cclxuXHQ8L2Rpdj5cclxuXHJcbjwvZGl2PiJdfQ==