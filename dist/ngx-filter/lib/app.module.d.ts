import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./components/filter-group/filter.component";
import * as i2 from "./components/expandable-search/expandable-search.component";
import * as i3 from "./app.component";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/common";
import * as i8 from "@angular/platform-browser";
import * as i9 from "@angular/platform-browser/animations";
import * as i10 from "@angular/material/icon";
import * as i11 from "@angular/material/select";
import * as i12 from "@angular/material/input";
import * as i13 from "nowboard-icon";
import * as i14 from "@angular/material/tooltip";
import * as i15 from "@angular/material/datepicker";
import * as i16 from "@angular/material/core";
import * as i17 from "@angular/material/bottom-sheet";
export declare class FilterModule {
    constructor(parentModule?: FilterModule);
    static forRoot(): ModuleWithProviders<FilterModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FilterModule, [typeof i1.FilterComponent, typeof i2.ExpandableSearchComponent, typeof i3.AppComponent], [typeof i4.FormsModule, typeof i5.MatFormFieldModule, typeof i6.MatButtonModule, typeof i7.CommonModule, typeof i8.BrowserModule, typeof i9.BrowserAnimationsModule, typeof i4.FormsModule, typeof i4.ReactiveFormsModule, typeof i10.MatIconModule, typeof i11.MatSelectModule, typeof i12.MatInputModule, typeof i13.NowboardIconModule, typeof i14.MatTooltipModule, typeof i15.MatDatepickerModule, typeof i16.MatNativeDateModule, typeof i17.MatBottomSheetModule], [typeof i3.AppComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FilterModule>;
}
