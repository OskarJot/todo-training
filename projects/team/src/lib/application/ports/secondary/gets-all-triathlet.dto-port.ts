import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TriathletDTO } from './triathlet.dto';

export const GETS_ALL_TRIATHLET_DTO = new InjectionToken<GetsAllTriathletDtoPort>('GETS_ALL_TRIATHLET_DTO');

export interface GetsAllTriathletDtoPort {
  getAll(criterion?: Partial<TriathletDTO>): Observable<TriathletDTO[]>;
}
