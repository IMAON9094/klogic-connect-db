import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  actions=[1,2];
  userID:string = this.dataService.getToken();

  regisForm: FormGroup;
    constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.regisForm = this.fb.group({
      courseID1: ['', Validators.required],
      section1: ['', Validators.required],
      courseID2: ['', Validators.required],
      section2: ['', Validators.required],
      courseID3: ['', Validators.required],
      section3: ['', Validators.required],
      courseID4: ['', Validators.required],
      section4: ['', Validators.required],
      courseID5: ['', Validators.required],
      section5: ['', Validators.required],
      courseID6: ['', Validators.required],
      section6: ['', Validators.required],
    });
  }


  ngOnInit(): void {
  }

  postdata(regisForm1:any){
    console.log(regisForm1.value);
    //1
    this.dataService.registration(this.userID,regisForm1.value.courseID1,regisForm1.value.section1).pipe(first()).subscribe(
      data => {
        console.log("insert 1");
      },
      error => {
        console.log(regisForm1.value.courseID1," ",regisForm1.value.section1);
        alert("Please try again");
      });

    //2
    this.dataService.registration(this.userID,regisForm1.value.courseID2,regisForm1.value.section2).pipe(first()).subscribe(
      data => {
        console.log("insert 2");
      },
      error => {
        console.log(regisForm1.value.courseID2," ",regisForm1.value.section2);
        alert("Please try again");
      });

    //3
    this.dataService.registration(this.userID,regisForm1.value.courseID3,regisForm1.value.section3).pipe(first()).subscribe(
      data => {
        console.log("insert 3");
      },
      error => {
        console.log(regisForm1.value.courseID3," ",regisForm1.value.section3);
        alert("Please try again");
      });

    //4
    this.dataService.registration(this.userID,regisForm1.value.courseID4,regisForm1.value.section4).pipe(first()).subscribe(
      data => {
        console.log("insert 4");
      },
      error => {
        console.log(regisForm1.value.courseID4," ",regisForm1.value.section4);
        alert("Please try again");
      });

    //5
    this.dataService.registration(this.userID,regisForm1.value.courseID5,regisForm1.value.section5).pipe(first()).subscribe(
      data => {
        console.log("insert 5");
      },
      error => {
        console.log(regisForm1.value.courseID5," ",regisForm1.value.section5);
        alert("Please try again");
      });

    //6
    this.dataService.registration(this.userID,regisForm1.value.courseID6,regisForm1.value.section6).pipe(first()).subscribe(
      data => {
        console.log("insert 6");
      },
      error => {
        console.log(regisForm1.value.courseID6," ",regisForm1.value.section6);
        alert("Please try again");
      });

      this.router.navigate(['student']);
  }


  /*postdata(userForm1:any){

    this.dataService.userlogin(userForm1.value.stdID,userForm1.value.personalID).pipe(first()).subscribe(
    data => {
      //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
      //this.router.navigate([redirect]);
      this.router.navigate(['student']);
    },
    error => {
      console.log(userForm1.value);
      alert("User name or password is incorrect")
    });
    }
    //get stdID() { return this.userForm.get('stdID'); }
    //get personalID() { return this.userForm.get('personalID'); }

  Submit(){
    this.router.navigate(['student']);
  }*/


}
