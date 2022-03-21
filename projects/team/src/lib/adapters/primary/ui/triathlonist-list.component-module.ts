import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriathlonistListComponent } from './triathlonist-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TriathlonistListComponent],
  providers: [],
  exports: [TriathlonistListComponent],
})
export class TriathlonistListComponentModule {}
