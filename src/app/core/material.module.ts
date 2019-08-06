import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';

import {
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatSortModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, GoogleChartsModule, MatButtonModule,
    MatToolbarModule, MatNativeDateModule, MatIconModule,
    MatSidenavModule, MatListModule, MatTableModule,
    MatFormFieldModule, MatPaginatorModule, MatSortModule,
    MatCheckboxModule, MatInputModule, MatCardModule, MatGridListModule
  ],
  exports: [
    CommonModule, GoogleChartsModule, MatButtonModule,
    MatToolbarModule, MatNativeDateModule, MatIconModule,
    MatSidenavModule, MatListModule, MatTableModule,
    MatFormFieldModule, MatPaginatorModule, MatCheckboxModule,
    MatInputModule, MatSortModule, MatCardModule, MatGridListModule
  ],
})
export class CustomMaterialModule { }