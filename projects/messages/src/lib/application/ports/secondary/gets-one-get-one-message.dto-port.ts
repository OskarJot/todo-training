import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { GetOneMessageDTO } from './get-one-message.dto';

export const GETS_ONE_GET_ONE_MESSAGE_DTO = new InjectionToken<GetsOneGetOneMessageDtoPort>('GETS_ONE_GET_ONE_MESSAGE_DTO');

export interface GetsOneGetOneMessageDtoPort {
  getOne(id: string): Observable<GetOneMessageDTO | undefined>;
}
