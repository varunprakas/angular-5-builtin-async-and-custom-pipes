import { Component } from '@angular/core';

@Component({
  selector: 'person',
  template: `<p>The {{name}}'s birthday is {{ birthday | date }}</p>`
})

export class BuiltInPipe {
  name = 'Alex';
  birthday = new Date(1987, 1, 10); // April 15, 1988
}