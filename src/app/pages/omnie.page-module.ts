import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OmniePage } from './omnie.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: OmniePage,
      },
    ]),
  ],
  declarations: [OmniePage],
  providers: [],
  exports: [],
})
export class OmniePageModule {}
export class AppModule{}


