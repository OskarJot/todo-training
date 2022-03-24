import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TriathlonistListDTO } from '../../../application/ports/secondary/triathlonist-list.dto';
import {
  GETS_ALL_TRIATHLONIST_LIST_DTO,
  GetsAllTriathlonistListDtoPort,
} from '../../../application/ports/secondary/gets-all-triathlonist-list.dto-port';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';

@Component({
  selector: 'lib-triathlonist-list',
  templateUrl: './triathlonist-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriathlonistListComponent {
  trathlonistList$: Observable<TriathlonistListDTO[]> =
    this._getsAllTriathlonistListDto.getAll();

  constructor(
    @Inject(GETS_ALL_TRIATHLONIST_LIST_DTO)
    private _getsAllTriathlonistListDto: GetsAllTriathlonistListDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onTriathletIdClicked(item: TriathlonistListDTO): void {
    this._contextDtoStorage.next({triathletId: item.id});
  }
}
