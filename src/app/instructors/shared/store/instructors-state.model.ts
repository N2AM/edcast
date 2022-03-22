import {Instructor} from "../../models/instructor.model";

export interface InstructorsStateModel {
  instructors: Instructor[];
  selectedInstructor: Instructor;
}
