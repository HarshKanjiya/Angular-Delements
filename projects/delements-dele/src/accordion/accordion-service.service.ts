import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  currentTab = signal<any>(-1);
  prevTab = signal<any>(-2);

  private dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();

  constructor() {
    effect(() => this.dataSubject.next(this.currentTab()));
  }
}
