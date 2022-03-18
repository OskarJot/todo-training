import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddsTriathlonistListDtoPort } from '../../../application/ports/secondary/adds-triathlonist-list.dto-port';
import { TriathlonistListDTO } from '../../../application/ports/secondary/triathlonist-list.dto';

@Injectable()
export class FirebaseAddTriathlonistListService implements AddsTriathlonistListDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(triathlonistList: Partial<TriathlonistListDTO>): void {
    this._client.collection('triathlonist-lists').add(triathlonistList);
  }
}
