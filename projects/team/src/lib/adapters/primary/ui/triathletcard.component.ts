import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TriathlonistListDTO } from '../../../application/ports/secondary/triathlonist-list.dto';
import {
  GETS_ONE_TRIATHLONIST_LIST_DTO,
  GetsOneTriathlonistListDtoPort,
} from '../../../application/ports/secondary/gets-one-triathlonist-list.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';

@Component({
  selector: 'lib-triathletcard',
  templateUrl: './triathletcard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriathletcardComponent {
  trathlonistList$: Observable<TriathlonistListDTO> =
    this._contextDtoStoragePort
      .asObservable()
      .pipe(
        switchMap((data: ContextDTO) =>
          this._getsOneTriathlonistListDto.getOne(data.triathletId)
        )
      );

  constructor(
    @Inject(GETS_ONE_TRIATHLONIST_LIST_DTO)
    private _getsOneTriathlonistListDto: GetsOneTriathlonistListDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}
}
