import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./instructors/instructors.module').then((m) => m.InstructorsModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./courses/courses.module').then((m) => m.CoursesModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsModule),
      }
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // redirect all non existed routes to empty page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
