import {Component} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent {

  obs$ = of({
    prop: 12
  });

}
