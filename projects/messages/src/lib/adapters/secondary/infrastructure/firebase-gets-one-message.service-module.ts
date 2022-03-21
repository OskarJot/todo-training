import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseGetsOneMessageService } from './firebase-gets-one-message.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseGetsOneMessageService],
  	exports: [] })
export class FirebaseGetsOneMessageServiceModule {
}
