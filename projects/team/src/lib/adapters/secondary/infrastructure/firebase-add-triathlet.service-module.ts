import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseAddTriathletService } from './firebase-add-triathlet.service';
import { ADDS_TRIATHLET_DTO } from '../../../application/ports/secondary/adds-triathlet.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseAddTriathletService, { provide: ADDS_TRIATHLET_DTO, useExisting: FirebaseAddTriathletService }],
  	exports: [] })
export class FirebaseAddTriathletServiceModule {
}
