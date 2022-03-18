import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseAddTriathlonistListService } from './firebase-add-triathlonist-list.service';
import { ADDS_TRIATHLONIST_LIST_DTO } from '../../../application/ports/secondary/adds-triathlonist-list.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseAddTriathlonistListService,
    {
      provide: ADDS_TRIATHLONIST_LIST_DTO,
      useExisting: FirebaseAddTriathlonistListService,
    },
  ],
  exports: [],
})
export class FirebaseAddTriathlonistListServiceModule {}
