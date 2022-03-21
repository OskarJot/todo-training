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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-triathletcard',
  templateUrl: './triathletcard.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TriathletcardComponent {
  triathlonistcard$: Observable<TriathlonistListDTO> =
    this._getsOneTriathlonistListDto.getOne(
        this._activatedRoute.snapshot.params.trathlonistListId
    );

  constructor(
    @Inject(GETS_ONE_TRIATHLONIST_LIST_DTO)
    private _getsOneTriathlonistListDto: GetsOneTriathlonistListDtoPort,
    private _activatedRoute: ActivatedRoute
  ) {}
}
