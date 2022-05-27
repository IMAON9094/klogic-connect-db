import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { TeacherhomeComponent } from './teacherhome/teacherhome.component';
import { TeachernamestudentComponent } from './teachernamestudent/teachernamestudent.component';
import { TeacherscheduleComponent } from './teacherschedule/teacherschedule.component';

const teacherroutes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: TeacherhomeComponent},
          { path: 'teachernamestudent', component: TeachernamestudentComponent},
          { path: 'teacherschedule', component: TeacherscheduleComponent},
        ]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(teacherroutes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
