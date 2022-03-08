import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-employee-cards',
  templateUrl: './employee-cards.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardsComponent {
  dane$ = of([
    {
      name: 'Employee 1',
      imageUrl: 'http://localhost:4200/assets/20190908Malbork5489_str1219.jpg',
    },
    {
      name: 'Employee 2',
      imageUrl: 'https://images.squarespace-cdn.com/content/v1/5dd1dbe652b7125e8bb44cef/1575312535220-GDC9DUG5J53QD026LNZF/2018_0425+TalkSpace_+263_Grey+Headshot.jpg?format=750w',
    },
  ]);
}
