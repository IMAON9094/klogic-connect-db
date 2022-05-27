import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  actions=[1,2];
  option:number;
  userID:string = this.dataService.getToken();


  constructor(private dataService: ApiService) { }

  //rs:any = this.dataService.getResult();
  rs:any;

  ngOnInit(): void {
  }



  changesec(){
    console.log(this.option);
    this.dataService.result(this.option,this.userID).pipe(first()).subscribe(
      data => {
        //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
        //this.router.navigate([redirect]);
        //this.router.navigate(['student']);
        //this.data_result=
        console.log("result.ts file");
        this.rs=this.dataService.getResult();
        //console.log(this.dataService.getResult());
        console.log(this.rs);

      },
      error => {
        alert("SOS");
      });
      }
      //get stdID() { return this.userForm.get('stdID'); }
      //get personalID() { return this.userForm.get('personalID'); }
}


