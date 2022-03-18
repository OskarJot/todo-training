import { InjectionToken } from '@angular/core';
import { TriathlonistListDTO } from './triathlonist-list.dto';

export const ADDS_TRIATHLONIST_LIST_DTO = new InjectionToken<AddsTriathlonistListDtoPort>('ADDS_TRIATHLONIST_LIST_DTO');

export interface AddsTriathlonistListDtoPort {
  add(triathlonistList: Partial<TriathlonistListDTO>): void;
}
