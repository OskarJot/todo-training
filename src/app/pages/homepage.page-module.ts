import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepagePage } from './homepage.page';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { TriathlonistListComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/triathlonist-list.component-module';
import { FirebaseTriathlonistListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-triathlonist-list.service-module';
import { TriathletcardComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/triathletcard.component-module';
import { TriathletIdResolverModule } from 'projects/team/src/lib/adapters/primary/ui/triathlet-id.resolver-module';
import { TriathletIdResolver } from 'projects/team/src/lib/adapters/primary/ui/triathlet-id.resolver';

@NgModule({
  imports: [
    CommonModule,
    OurTeamComponentModule,
    TriathlonistListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomepagePage,
        resolve: {
          triathletId: TriathletIdResolver,
        }
      },
    ]),
    FirebaseTriathlonistListServiceModule,
    TriathletcardComponentModule,
    TriathletIdResolverModule,
  ],
  declarations: [HomepagePage],
  providers: [],
  exports: [],
})
export class HomepagePageModule {}
