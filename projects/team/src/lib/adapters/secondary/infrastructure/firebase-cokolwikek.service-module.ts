import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseCokolwikekService } from './firebase-cokolwikek.service';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseCokolwikekService],
  	exports: [] })
export class FirebaseCokolwikekServiceModule {
}
