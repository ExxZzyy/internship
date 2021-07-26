import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule, MAT_TABS_CONFIG } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },
    {
      provide: MAT_TABS_CONFIG,
      useValue: { dynamicHeight: true },
    },
  ],
})
export class AngularMaterialCommonModule {}