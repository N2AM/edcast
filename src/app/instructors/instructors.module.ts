import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsRoutingModule } from './instructors-routing.module';
import { InstructorsComponent } from './instructors.component';
import {InstructorModule} from "./sub-modules/instructor/instructor.module";
import {HttpClientModule} from "@angular/common/http";
import {FilterComponent} from "./components/filter/filter.component";
import {NgxsModule} from "@ngxs/store";
import {InstructorsState} from "./shared/store/instructors.state";
import {InstructorsStateService} from "./shared/store/instructors-state.service";
import {InstructorsService} from "./shared/services/instructors.service";


@NgModule({
  declarations: [
    InstructorsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    InstructorsRoutingModule,
    InstructorModule,
    HttpClientModule,
    NgxsModule.forFeature([InstructorsState]),

  ],
  providers:[InstructorsStateService, InstructorsService]
})
export class InstructorsModule { }
