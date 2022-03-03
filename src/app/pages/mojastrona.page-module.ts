import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MojastronaPage } from './mojastrona.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: MojastronaPage,
        }
      ])],
  	declarations: [MojastronaPage],
  	providers: [],
  	exports: [] })
export class MojastronaPageModule {
}
