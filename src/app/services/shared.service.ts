import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentSectionSubject = new BehaviorSubject<string>('');
  currentSection$ = this.currentSectionSubject.asObservable();

  setCurrentSection(section: string) {
    this.currentSectionSubject.next(section);
  }
}
