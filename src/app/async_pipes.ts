import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'person-async',
  template: `<p>Comment: {{ comment$ | async }}</p>
    <button (click)="getComment()">Get Comment</button>`
})

export class AsyncPipe {

	comment$: Observable<string>;

	private comments = [
	    'Comment 1',
	    'Comment 2',
	    'Comment 3'
  	];

	constructor() { this.getComment();}

	getComment(){
 	   this.comment$ = Observable.interval(500)
      .map(i => this.comments[i])
      .take(this.comments.length);
	}
}