import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllTriathlonistListDtoPort } from '../../../application/ports/secondary/gets-all-triathlonist-list.dto-port';
import { TriathlonistListDTO } from '../../../application/ports/secondary/triathlonist-list.dto';
import { filterByCriterion } from '@lowgular/shared';
import { GetsOneTriathlonistListDtoPort } from '../../../application/ports/secondary/gets-one-triathlonist-list.dto-port';

@Injectable()
export class FirebaseTriathlonistListService
  implements GetsAllTriathlonistListDtoPort, GetsOneTriathlonistListDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(
    criterion: Partial<TriathlonistListDTO>
  ): Observable<TriathlonistListDTO[]> {
    return this._client
      .collection<TriathlonistListDTO>('triathlonist-list')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: TriathlonistListDTO[]) => filterByCriterion(data, criterion))
      );
  }

  getOne(id: string): Observable<TriathlonistListDTO> {
    return this._client
      .doc<TriathlonistListDTO>('triathlonist-list/' + id)
      .valueChanges({ idField: 'id' });
  }
}
