import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateTriathletComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/create-triathlet.component-module';
import { FirebaseAddTriathlonistListServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-add-triathlonist-list.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminPage,
        }
      ]),
  CreateTriathletComponentModule,
  FirebaseAddTriathlonistListServiceModule,
],
  	declarations: [AdminPage],
  	providers: [],
  	exports: [] })
export class AdminPageModule {
}
