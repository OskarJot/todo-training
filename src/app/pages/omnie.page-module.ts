import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OmniePage } from './omnie.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeCardsComponentModule } from 'projects/employess/src/lib/adapters/primary/ui/employee-cards.component-module';
import { EmployeeFormComponentModule } from 'projects/employess/src/lib/adapters/primary/ui/employee-form.component-module';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module'

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    EmployeeCardsComponentModule,
    EmployeeFormComponentModule,
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
  ],
  declarations: [OmniePage],
  providers: [],
  exports: [],
})
export class OmniePageModule {}
export class AppModule{}


