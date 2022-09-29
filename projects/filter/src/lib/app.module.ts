import { LOCALE_ID, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NowboardIconModule, NowboardIconService } from "nowboard-icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ExpandableSearchComponent, FilterComponent } from '../public-api';
import { AppComponent } from './app.component';


@NgModule({
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
  exports:
    [
      AppComponent,
    ]
})

export class FilterModule {
  constructor(@Optional() @SkipSelf() parentModule?: FilterModule) {
    if (parentModule) {
      throw new Error(
        'FilterModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(): ModuleWithProviders<FilterModule> {
    return {
      ngModule: FilterModule,
      providers: [
      ]
    };
  }
}
