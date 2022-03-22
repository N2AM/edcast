import { Injectable } from '@angular/core';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { InstructorsState } from './instructors.state';
import {Instructor} from "../../models/instructor.model";

@Injectable()
export class InstructorsStateService {
  @Select(InstructorsState.getInstructors) readonly Instructors$!: Observable<Instructor[]>;
  @Select(InstructorsState.getSelectedInstructor) readonly selectedInstructor$!: Observable<Instructor>;

  @Emitter(InstructorsState.loadInstructors) readonly loadInstructors!: Emittable<void>;
  @Emitter(InstructorsState.selectInstructorById) readonly selectInstructorById!: Emittable<number>;
}
