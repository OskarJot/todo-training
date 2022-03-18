import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  ADDS_TRIATHLONIST_LIST_DTO,
  AddsTriathlonistListDtoPort,
} from '../../../application/ports/secondary/adds-triathlonist-list.dto-port'

@Component({
  selector: 'lib-create-triathlet',
  templateUrl: './create-triathlet.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTriathletComponent {
  readonly createTriathlonist: FormGroup = new FormGroup({
    name: new FormControl(),
    imageUrl: new FormControl(),
    bio: new FormControl(),
  });
  
  constructor (
    @Inject(ADDS_TRIATHLONIST_LIST_DTO) private _addsTriathlonistListDto: AddsTriathlonistListDtoPort
  ){}

  onCreateTriathlonistSubmited(createTriathlonist: FormGroup): void {
    if (createTriathlonist.invalid) {
      return;
    }
    this._addsTriathlonistListDto.add({
      name: createTriathlonist.get('name').value,
      bio: createTriathlonist.get('bio').value,
      imageUrl: createTriathlonist.get('imageUrl').value,
    });
    this.createTriathlonist.reset();
}

}
