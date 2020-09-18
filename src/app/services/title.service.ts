import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TitleService {

  constructor() { }

  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public title$ = this.titleSubject.asObservable();

  public setTitle(title: string): void {
    this.titleSubject.next(title);
  }
}
