import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
}
