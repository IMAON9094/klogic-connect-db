import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teachernamestudent',
  templateUrl: './teachernamestudent.component.html',
  styleUrls: ['./teachernamestudent.component.scss']
})
export class TeachernamestudentComponent implements OnInit {

  stdForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.stdForm = this.fb.group({
      stdID: ['', Validators.required],
      name: ['', Validators.required],
      sex: ['', Validators.required],
      birthday: ['', Validators.required],
      personalID: ['', Validators.required],
    });
  }


  ngOnInit(): void {
  }

  postdata(stdForm1:any){
    console.log(stdForm1.value);
    //add user
    this.dataService.adduser(stdForm1.value.personalID,stdForm1.value.stdID,stdForm1.value.personalID).pipe(first()).subscribe(
      data => {
        console.log("insert 1");
      },
      error => {
        console.log(stdForm1.value.personalID," ",stdForm1.value.stdID);
        alert("Please try again");
      });

    //add student
    this.dataService.addstudent(stdForm1.value.stdID,stdForm1.value.name,stdForm1.value.sex,stdForm1.value.birthday,stdForm1.value.personalID).pipe(first()).subscribe(
      data => {
        console.log("insert 1");
      },
      error => {
        console.log(stdForm1.value.stdID,stdForm1.value.name,stdForm1.value.sex,stdForm1.value.birthday,stdForm1.value.personalID);
        alert("Please try again");
      });

      this.router.navigate(['teacher']);


  }

}
