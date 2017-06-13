import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadModuleService implements CanLoad {

  private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private obser:Observable<boolean> = new Observable<boolean>();
  constructor() { }

  canLoad() {
    // let promise:Promise<boolean> = 
    // this.subject.next(true);

    // return new Promise<boolean>((resolve, reject) => {
    //   resolve(false);
    // });
    // setTimeout(() => {
    //   console.log(this.subject.value);
    //   this.subject.next(true);
    // }, 10000);

    return true;    

    // return Observable.of(true);

    // return this.subject;
  }

}
