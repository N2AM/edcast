import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Instructor } from './models/instructor.model';
import { InstructorsStateService } from './shared/store/instructors-state.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss'],
})
export class InstructorsComponent implements OnInit, OnDestroy {
  readonly #subscriptions: Subscription = new Subscription();
  instructors: Instructor[] = [];

  constructor(private instructorsStateService: InstructorsStateService) {}

  ngOnInit(): void {
    this.instructorsStateService.loadInstructors.emit();
    this.#subscriptions.add(
      this.instructorsStateService.Instructors$.subscribe(
        (response: Instructor[]) => {
          this.instructors = response;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
