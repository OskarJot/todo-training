import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { OurTeamComponentModule } from '@team';
import { FirebaseTriathlonistListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-triathlonist-list.service-module';
import { TriathletcardComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/triathletcard.component-module';

@NgModule({
  imports: [
    CommonModule,
    ActivatedRoute,
    OurTeamComponentModule,
    TriathletcardComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
    FirebaseTriathlonistListServiceModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
