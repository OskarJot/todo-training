import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseTriathlonistService } from './firebase-triathlonist.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTriathlonistService],
  	exports: [] })
export class FirebaseTriathlonistServiceModule {
}
