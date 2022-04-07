import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { OurTeamComponentModule } from '@team';
import { FirebaseTriathlonistListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-triathlonist-list.service-module';
import { TriathletcardComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/triathletcard.component-module';
import { TriathlonistListComponentModule } from 'projects/team/src/lib/adapters/primary/ui/triathlonist-list.component-module';
import { CommonModule } from '@angular/common';
import { TriathletIdResolverModule } from 'projects/team/src/lib/adapters/primary/ui/triathlet-id.resolver-module';
import { TriathletIdResolver } from 'projects/team/src/lib/adapters/primary/ui/triathlet-id.resolver';

@NgModule({
  imports: [
    OurTeamComponentModule,
    CommonModule,
    TriathlonistListComponentModule,
    TriathletcardComponentModule,
    RouterModule.forChild([
      {
        path: ':triathletId',
        component: EmployeeDetailsPage,
        resolve: {
          triathletId: TriathletIdResolver,
        }
      },
    ]),
    FirebaseTriathlonistListServiceModule,
    TriathletIdResolverModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
