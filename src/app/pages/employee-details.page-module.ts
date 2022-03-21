import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { TriathlonistListComponentModule } from 'projects/team/src/lib/adapters/primary/ui/triathlonist-list.component-module';
import { OurTeamComponentModule } from '@team';

@NgModule({
  imports: [
    CommonModule,
    TriathlonistListComponentModule,
    OurTeamComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
