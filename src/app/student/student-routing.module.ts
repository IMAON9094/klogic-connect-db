import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CancleComponent } from './cancle/cancle.component';
import { ChangeComponent } from './change/change.component';
import { GradeComponent } from './grade/grade.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { StudentComponent } from './student.component';

const stdroutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    //canActivate: [AuthGuard],
    children: [
      {
        path: '',
        //canActivateChild: [AuthGuard],
        children: [
          { path: '', component: HomeComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'add', component: AddComponent },
          { path: 'cancle', component: CancleComponent },
          { path: 'change', component: ChangeComponent },
          { path: 'result', component: ResultComponent },
          { path: 'grade', component: GradeComponent },
          { path: 'password', component: PasswordComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(stdroutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
