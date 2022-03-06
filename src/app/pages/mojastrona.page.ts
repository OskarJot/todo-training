import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'lib-mojastrona-page',
  templateUrl: './mojastrona.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MojastronaPage implements OnInit {
    listaPracowników = [
        {"id":1, "name": "Oskar Jot"},
        {"id":2, "name": "Stefan"},
        {"id":3, "name": "Zenon"},
        {"id":4, "name": "Juras"}
    ]
    constructor () {}
    ngOnInit() {

    }
}
