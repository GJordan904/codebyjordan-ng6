import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {LayoutComponent} from './layout/layout.component';
import {SeoService} from './services/seo.service';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule,
  MatButtonModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
  MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule,
    MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule,
    MatToolbarModule, MatTooltipModule, MatTreeModule,
  ],
  declarations: [
    LayoutComponent,
    ContactFormComponent,
  ],
  exports: [
    CommonModule, ReactiveFormsModule,
    MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule,
    MatButtonModule, MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatDividerModule, MatExpansionModule,
    MatFormFieldModule, MatGridListModule,
    MatIconModule, MatInputModule, MatListModule,
    MatMenuModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule,
    MatStepperModule, MatTableModule, MatTabsModule,
    MatToolbarModule, MatTooltipModule, MatTreeModule,
    LayoutComponent,
    ContactFormComponent,
  ],
})
export class CbjCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CbjCommonModule,
      providers: [
        SeoService,
      ],
    };
  }
}
