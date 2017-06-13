import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private b = new Subject<string>();
  // private c = new BehaviorSubject<string>('bSubject!!!');
  // private o = new Observable<string>();
  constructor() {
    // this.b.next('Hello');
    // this.b.subscribe(value => {
    //   console.log(value);
    // });
    // this.o = this.returnObservable();
    // this.o.subscribe(value => {
    //   console.log(value);
    // });

    // this.c.next('Hi!!!!');
  }

  // returnObservable(): Observable<string> {
  //   return this.c.asObservable();
  // }

}
