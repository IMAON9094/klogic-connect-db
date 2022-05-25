import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './student/add/add.component';
import { CancleComponent } from './student/cancle/cancle.component';
import { ChangeComponent } from './student/change/change.component';
import { GradeComponent } from './student/grade/grade.component';
import { HomeComponent } from './student/home/home.component';
import { PasswordComponent } from './student/password/password.component';
import { RegisterComponent } from './student/register/register.component';
import { ResultComponent } from './student/result/result.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { TeachernamestudentComponent } from './teacher/teachernamestudent/teachernamestudent.component';
import { TeacherscheduleComponent } from './teacher/teacherschedule/teacherschedule.component';
import { LoginteacherComponent } from './login/loginteacher/loginteacher.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  /*{ path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add', component: AddComponent },
  { path: 'cancle', component: CancleComponent },
  { path: 'change', component: ChangeComponent },
  { path: 'result', component: ResultComponent },
  { path: 'grade', component: GradeComponent },
  { path: 'password', component: PasswordComponent},*/
  { path: 'login', component: LoginComponent},
  /*{ path: 'teacherhome', component: TeacherhomeComponent},
  { path: 'teachernamestudent', component: TeachernamestudentComponent},
  { path: 'teacherschedule', component: TeacherscheduleComponent},*/
  { path: 'loginteacher', component: LoginteacherComponent},
  { path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
  },
  { path: 'teacher',
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
