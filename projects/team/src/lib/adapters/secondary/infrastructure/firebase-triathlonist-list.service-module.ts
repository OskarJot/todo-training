import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTriathlonistListService } from './firebase-triathlonist-list.service';
import { GETS_ALL_TRIATHLONIST_LIST_DTO } from '../../../application/ports/secondary/gets-all-triathlonist-list.dto-port';
import { GETS_ONE_TRIATHLONIST_LIST_DTO } from '../../../application/ports/secondary/gets-one-triathlonist-list.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseTriathlonistListService,
    {
      provide: GETS_ALL_TRIATHLONIST_LIST_DTO,
      useExisting: FirebaseTriathlonistListService,
    },
    { provide: GETS_ONE_TRIATHLONIST_LIST_DTO, useExisting: FirebaseTriathlonistListService }
  ],
  exports: [],
})
export class FirebaseTriathlonistListServiceModule {}
