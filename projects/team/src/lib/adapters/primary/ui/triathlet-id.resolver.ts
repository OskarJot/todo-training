import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Injectable()
export class TriathletIdResolver implements Resolve<boolean> {
  constructor(@Inject(CONTEXT_DTO_STORAGE) private _contextDtoStorage: ContextDtoStoragePort) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this._contextDtoStorage.next({triathletId: route.params.item});
    return of(true);
  }
}
