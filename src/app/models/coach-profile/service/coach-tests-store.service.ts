import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetCoachTestsHttpService } from './get-coach-tests-http.service';
import { CoachTest } from '../../../interfaces/coach-edit';

@Injectable({
  providedIn: 'root',
})
export class CoachTestsStoreService {
  coachTestSubject$ = new BehaviorSubject<CoachTest[] | null>(null);

  coachTestResults$ = this.coachTestSubject$.asObservable();

  constructor(private coachTestHttpService: GetCoachTestsHttpService) {}

  getCoachHighPriorityTestResults(): void {
    this.coachTestHttpService
      .getHighPriorityCoachTests()
      .subscribe({ next: (value) => this.coachTestSubject$.next(value) });
  }

  getCoachCheckedTestResults(): void {
    this.coachTestHttpService
      .getCheckedCoachTests()
      .subscribe({ next: (value) => this.coachTestSubject$.next(value) });
  }

  getCoachUncheckedTestResults(): void {
    this.coachTestHttpService
      .getUncheckedCoachTests()
      .subscribe({ next: (value) => this.coachTestSubject$.next(value) });
  }
}
