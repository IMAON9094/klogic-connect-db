import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './user';
import { Teachers } from './teacher';
import { Result } from './result';
import { Register } from './register';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  dataresult:any;
  dataschedule:any;


  redirectUrl!: string;
  baseUrl:string = "http://localhost/Klogic-Fullstack-main/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password }).pipe(map(Users => {
      this.setToken(Users[0].stdID);
      this.getLoggedInName.emit(true);
      console.log(Users);
      console.log(this.getToken());
      return Users;
    }));
  }

  public teacherlogin(username: any, password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/loginteacher.php', { username, password }).pipe(map(Teachers => {
      this.setToken(Teachers[0].teacherID);
      this.getLoggedInName.emit(true);
      console.log(Teachers);
      console.log(this.getToken());
      return Teachers;
    }));
  }

  public result(option: any, userID: any) {
    return this.httpClient.post<any>(this.baseUrl + '/result.php', { option, userID }).pipe(map(Result => {
      console.log(Result);
      this.dataresult=Result;
      return Result;
    }));
  }


  public teacherschedule(option: any, userID: any) {
    return this.httpClient.post<any>(this.baseUrl + '/teacherschedule.php', { option, userID }).pipe(map(Teacherschedule => {
      console.log(Teacherschedule);
      this.dataschedule=Teacherschedule;
      return Teacherschedule;
    }));
  }

  public registration(stdID: any,course_code: any,section: any) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { stdID, course_code, section }).pipe(map(Register => {
      return Register;
    }));
  }

  public adduser(personalID: any,stdID: any,new_password: any) {
    return this.httpClient.post<any>(this.baseUrl + '/teacheradduser.php', { personalID,stdID, new_password }).pipe(map(Users => {
      return Users;
    }));
  }

  public addstudent(stdID: any,name: any,sex: any,birthday: any,personalID: any) {
    return this.httpClient.post<any>(this.baseUrl + '/teacheraddstudent.php', { stdID, name, sex, birthday, personalID }).pipe(map(Student => {
      return Student;
    }));
  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  getResult() {
    return this.dataresult;
  }

  getTeacherschedule() {
    return this.dataschedule;
  }
}
