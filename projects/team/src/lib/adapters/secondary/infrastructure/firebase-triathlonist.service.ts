import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, PartialObserver } from 'rxjs';
import { TriathletDTO } from '../../../application/ports/secondary/triathlet.dto';
import { map } from 'rxjs/operators';
import { GetsAllTriathletDtoPort } from '../../../application/ports/secondary/gets-all-triathlet.dto-port';
import {filterByCriterion} from '@lowgular/shared';

@Injectable()
export class FirebaseTriathlonistService implements GetsAllTriathletDtoPort {
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<TriathletDTO>): Observable<TriathletDTO[]> {
    return this._client
    .collection<TriathletDTO>('employee')
    .valueChanges({ idField: 'id'})
    .pipe(map(data => filterByCriterion(data, criterion)));
  }
}
