import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import type { Instructor } from '../../models/instructor.model';
import {
  INSTRUCTOR_ENDPOINT,
  INSTRUCTORS_ENDPOINT,
} from '../../constants/instructor.constant';

@Injectable({
  providedIn: 'root',
})
export class InstructorsService {
  constructor(private httpClient: HttpClient) {}

  getInstructors$(): Observable<Instructor[]> {
    return this.httpClient.get<Instructor[]>(`${INSTRUCTORS_ENDPOINT}`);
  }
  getInstructor$(instructorId: number): Observable<Instructor> {
    return this.httpClient.get<Instructor>(
      `${INSTRUCTOR_ENDPOINT}/${instructorId}`
    );
  }
}
