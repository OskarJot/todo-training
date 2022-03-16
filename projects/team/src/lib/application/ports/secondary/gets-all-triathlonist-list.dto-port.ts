import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TriathlonistListDTO } from './triathlonist-list.dto';

export const GETS_ALL_TRIATHLONIST_LIST_DTO =
  new InjectionToken<GetsAllTriathlonistListDtoPort>(
    'GETS_ALL_TRIATHLONIST_LIST_DTO'
  );

export interface GetsAllTriathlonistListDtoPort {
  getAll(
    criterion?: Partial<TriathlonistListDTO>
  ): Observable<TriathlonistListDTO[]>;
}
