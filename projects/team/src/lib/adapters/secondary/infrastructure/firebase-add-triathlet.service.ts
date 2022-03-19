import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddsTriathletDtoPort } from '../../../application/ports/secondary/adds-triathlet.dto-port';
import { TriathletDTO } from '../../../application/ports/secondary/triathlet.dto';

@Injectable()
export class FirebaseAddTriathletService implements AddsTriathletDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(triathlet: Partial<TriathletDTO>): void {
    this._client.collection('triathlets').add(triathlet);
  }
}
