import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTriathletComponent } from './create-triathlet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateTriathletComponent],
  	providers: [],
  	exports: [CreateTriathletComponent] })
export class CreateTriathletComponentModule {
}
