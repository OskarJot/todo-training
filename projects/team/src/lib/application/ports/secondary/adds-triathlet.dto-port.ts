import { InjectionToken } from '@angular/core';
import { TriathletDTO } from './triathlet.dto';

export const ADDS_TRIATHLET_DTO = new InjectionToken<AddsTriathletDtoPort>('ADDS_TRIATHLET_DTO');

export interface AddsTriathletDtoPort {
  add(triathlet: Partial<TriathletDTO>): void;
}
