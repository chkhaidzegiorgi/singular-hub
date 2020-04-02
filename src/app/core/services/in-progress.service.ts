import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InProgressRequestService {

  requestCount = 0;

  private show$ = new BehaviorSubject<boolean>(false);
  public showProgress$ = this.show$.asObservable();

  constructor() { }

  increment(): void {
    this.requestCount++;

    this.changeState();
  }

  decrement(): void {
    if (this.requestCount === 0) {
      return;
    }

    this.requestCount--;
    this.changeState();
  }

  changeState(): void {
    if (this.requestCount > 0) {
      this.show$.next(true);
    } else {
      this.show$.next(false);
    }
  }
}
