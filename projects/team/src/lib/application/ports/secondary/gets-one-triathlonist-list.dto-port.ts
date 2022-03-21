import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TriathlonistListDTO } from './triathlonist-list.dto';

export const GETS_ONE_TRIATHLONIST_LIST_DTO = new InjectionToken<GetsOneTriathlonistListDtoPort>('GETS_ONE_TRIATHLONIST_LIST_DTO');

export interface GetsOneTriathlonistListDtoPort {
  getOne(id: string): Observable<TriathlonistListDTO | undefined>;
}
