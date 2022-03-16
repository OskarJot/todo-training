import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriathlonistListComponent } from './triathlonist-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TriathlonistListComponent],
  	providers: [],
  	exports: [TriathlonistListComponent] })
export class TriathlonistListComponentModule {
}
