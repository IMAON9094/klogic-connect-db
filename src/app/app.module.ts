import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './student/header/header.component';
import { HomeComponent } from './student/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './student/sidenav/sidenav.component';
import { RegisterComponent } from './student/register/register.component';
import { AddComponent } from './student/add/add.component';
import { CancleComponent } from './student/cancle/cancle.component';
import { ChangeComponent } from './student/change/change.component';
import { ResultComponent } from './student/result/result.component';
import { GradeComponent } from './student/grade/grade.component';
import { PasswordComponent } from './student/password/password.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersidenavComponent } from './teacher/teachersidenav/teachersidenav.component';
import { TeachernamestudentComponent } from './teacher/teachernamestudent/teachernamestudent.component';
import { TeacherscheduleComponent } from './teacher/teacherschedule/teacherschedule.component';
import { TeacherhomeComponent } from './teacher/teacherhome/teacherhome.component';
import { AdminComponent } from './admin/admin.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { AddteacherComponent } from './admin/addteacher/addteacher.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ShowstudentComponent } from './admin/showstudent/showstudent.component';
import { ShowteacherComponent } from './admin/showteacher/showteacher.component';
import { ShowuserComponent } from './admin/showuser/showuser.component';
import { TeachertimetableComponent } from './teacher/teachertimetable/teachertimetable.component';
// * MATERIAL IMPORTS
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { LoginteacherComponent } from './login/loginteacher/loginteacher.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    RegisterComponent,
    AddComponent,
    CancleComponent,
    ChangeComponent,
    ResultComponent,
    GradeComponent,
    PasswordComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    TeachersidenavComponent,
    TeachernamestudentComponent,
    TeacherscheduleComponent,
    TeacherhomeComponent,
    AdminComponent,
    AddstudentComponent,
    AddteacherComponent,
    DashboardComponent,
    ShowstudentComponent,
    ShowteacherComponent,
    ShowuserComponent,
    TeachertimetableComponent,
    LoginteacherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
