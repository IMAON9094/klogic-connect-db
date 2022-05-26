import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.userForm = this.fb.group({
      stdID: ['', Validators.required],
      personalID: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  postdata(userForm1:any){
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
    get stdID() { return this.userForm.get('stdID'); }
    get personalID() { return this.userForm.get('personalID'); }

  /*Submit(){
    this.router.navigate(['student']);
  }*/

}
