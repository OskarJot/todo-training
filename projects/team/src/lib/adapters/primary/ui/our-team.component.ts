import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { TriathletDTO } from '../../../application/ports/secondary/triathlet.dto';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurTeamComponent {
  dane$: Observable<TriathletDTO[]> = of([
    {
      id: '1',
      name: 'Jan Frodeno',
      imageUrl:
        'https://akademiatriathlonu.pl/wp-content/uploads/2019/10/Ironman-Kona-PRO-m%C4%99%C5%BCczy%C5%BAni-mini.jpg',
      department: { bio: 'PRO TRI' },
    },
    {
      id: '2',
      name: 'Mark Allen',
      imageUrl:
        'https://www.triathlon.org/images/news_thumbs/Avignon_1989_-_Mark_Allen_-_credit_ITU.jpg',
      department: { bio: 'PRO TRI' },
    },
    {
      id: '3',
      name: 'Jerzy Górski',
      imageUrl:
        'http://ocdn.eu/images/pulscms/ZWY7MDA_/d3d70566e584f7cc91fefd746961cea2.jpeg',
      department: { bio: 'PRO TRI' },
    },
  ]);

  // onEmployeeClicked(employee) {
  //   alert(employee.name);
  // }
}
