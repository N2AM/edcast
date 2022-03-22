import { Injectable, Injector } from '@angular/core';
import {Selector, State, StateContext} from '@ngxs/store';
import {EmitterAction, Receiver} from "@ngxs-labs/emitter";

import {Observable, tap} from 'rxjs';

import { InstructorsActionType } from './instructors.action';
import type {Instructor} from "../../models/instructor.model";
import {InstructorsStateModel} from "./instructors-state.model";
import {InstructorsService} from "../services/instructors.service";

export const DEFAULT_INSTRUCTORS_STATE: InstructorsState = {
  instructors: [],
  selectedInstructor: {
    "id": "1",
    "name": "Albert",
    "surname": "Einstein",
    "companyName": "Siemens",
    "companyLogo": "/assets/icons/Rectangle.svg",
    "rating": 9.0,
    "deliviries": 6,
    "startRate": 90,
    "dailyRate": 120,
    "country": "Congo",
    "languages": ["Turkish", "English"],
    "skills": ["angular", "react", "redux", "spring", "c++", ".net"],
    "reviews": 15,
    "img_url": "/assets/images/45.png"
  }
}

@State<InstructorsState>({
  name: 'instructors',
  defaults: DEFAULT_INSTRUCTORS_STATE,
})
@Injectable({providedIn:"root"})
export class InstructorsState {

  private static  instructorsService: InstructorsService;

  constructor(injector: Injector) {
    InstructorsState.instructorsService = injector.get(InstructorsService);
  }

  @Selector()
  static getInstructors(state: InstructorsStateModel): Instructor[] {
    return state.instructors;
  }

  @Selector()
  static getSelectedInstructor(state: InstructorsStateModel): Instructor {
    return state.selectedInstructor;
  }
  @Receiver({ type: InstructorsActionType.INSTRUCTORS_LOAD })
  static loadInstructors(ctx: StateContext<InstructorsStateModel>): Observable<Instructor[]> {

    return this.instructorsService.getInstructors$().pipe(tap(async (instructors)=>{
      ctx.patchState({instructors})
    }))
  }
  @Receiver({ type: InstructorsActionType.INSTRUCTOR_BY_ID_SELECT },)
  static selectInstructorById(ctx: StateContext<InstructorsStateModel>,{ payload }: EmitterAction<number>): Observable<Instructor> {
       return this.instructorsService.getInstructor$(payload).pipe(tap(async (instructor)=>{
         ctx.patchState({selectedInstructor: instructor})
       }));
  }
  }
