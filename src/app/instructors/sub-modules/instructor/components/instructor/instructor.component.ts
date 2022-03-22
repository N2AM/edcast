import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from "rxjs";

import { Instructor } from '../../../../models/instructor.model';
import {InstructorsStateService} from "../../../../shared/store/instructors-state.service";

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent implements OnInit {
  readonly #subscriptions: Subscription = new Subscription();
  instructor!: Instructor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private instructorsStateService: InstructorsStateService
  ) {}

  ngOnInit(): void {
    this.#subscriptions.add(
    this.activatedRoute.params.subscribe((prams) => {
      if (prams['id']) {
        this.instructorsStateService.selectInstructorById.emit(prams['id']);

        this.instructorsStateService.selectedInstructor$
          .subscribe((response: Instructor) => {
            this.instructor = response;
          });
      }
    }));
  }
  ngOnDestroy():void{
    this.#subscriptions.unsubscribe()
  }
}
