import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MojastronaPage } from './mojastrona.page';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({ imports: [CommonModule, 
  CarouselModule.forRoot(),    
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
