import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GetsOneTriathlonistListDtoPort } from '../../../application/ports/secondary/gets-one-triathlonist-list.dto-port';
import { TriathlonistListDTO } from '../../../application/ports/secondary/triathlonist-list.dto';

@Injectable()
export class FirebaseGetsOneTriathlonistListService implements GetsOneTriathlonistListDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getOne(id: string): Observable<TriathlonistListDTO> {
    return this._client.doc<TriathlonistListDTO>('triathlonist-list/'+id).valueChanges({idField: 'id'});
  }
}
