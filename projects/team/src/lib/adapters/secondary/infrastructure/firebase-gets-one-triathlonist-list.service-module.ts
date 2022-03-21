import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseGetsOneTriathlonistListService } from './firebase-gets-one-triathlonist-list.service';
import { GETS_ONE_TRIATHLONIST_LIST_DTO } from '../../../application/ports/secondary/gets-one-triathlonist-list.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseGetsOneTriathlonistListService, { provide: GETS_ONE_TRIATHLONIST_LIST_DTO, useExisting: FirebaseGetsOneTriathlonistListService }],
  	exports: [] })
export class FirebaseGetsOneTriathlonistListServiceModule {
}
