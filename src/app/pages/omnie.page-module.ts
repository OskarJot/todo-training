import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OmniePage } from './omnie.page';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    OurTeamComponentModule,
    CarouselModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: OmniePage,
      },
      // {
      //   path: 'Omnie/:name',
      //   component: EmployeeDetailsPage,
      // }
    ]),
    ContactFormComponentModule
  ],
  declarations: [OmniePage],
  providers: [],
  exports: [],
})
export class OmniePageModule {}
export class AppModule{}


