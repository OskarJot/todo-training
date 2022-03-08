import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardsComponent } from './employee-cards.component';

@NgModule({ imports: [CommonModule],
  	declarations: [EmployeeCardsComponent],
  	providers: [],
  	exports: [EmployeeCardsComponent] })
export class EmployeeCardsComponentModule {
}
