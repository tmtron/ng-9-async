import {Component} from '@angular/core';
import { of } from 'rxjs';
import {delay} from "rxjs/operators";

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent {

  obs$ = of({
    prop: 12
  }).pipe(delay(1000));

}
