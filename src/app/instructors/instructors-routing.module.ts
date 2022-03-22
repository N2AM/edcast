import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './instructors.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'instructors',
  },
  {
    path: 'instructors',
    pathMatch: 'full',
    component: InstructorsComponent,
  },
  {
    path: 'instructors/:id',
    loadChildren: () =>
      import('./sub-modules/instructor/instructor.module').then(
        (m) => m.InstructorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorsRoutingModule {}
