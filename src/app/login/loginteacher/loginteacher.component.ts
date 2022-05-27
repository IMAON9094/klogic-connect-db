import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-loginteacher',
  templateUrl: './loginteacher.component.html',
  styleUrls: ['./loginteacher.component.scss']
})
export class LoginteacherComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.userForm = this.fb.group({
      teacherID: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  postdata(userForm1:any){
    this.dataService.teacherlogin(userForm1.value.teacherID,userForm1.value.password).pipe(first()).subscribe(
    data => {
      this.router.navigate(['teacher']);
    },
    error => {
      console.log(userForm1.value);
      alert("User name or password is incorrect")
    });
    }
    get teacherID() { return this.userForm.get('teacherID'); }
    get password() { return this.userForm.get('password'); }


}
