import { ExpandableSearchComponent, FilterComponent } from '../public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxFilterLibraryComponent } from './ngx-filter.component';
import { NowboardIconModule } from "nowboard-icon";

@NgModule({
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
})
export class NgxFilterModule {

  public static forRoot(): ModuleWithProviders<NgxFilterModule> {
    return {
      ngModule: NgxFilterModule,
      providers: [
      ]
    };
  }
}
