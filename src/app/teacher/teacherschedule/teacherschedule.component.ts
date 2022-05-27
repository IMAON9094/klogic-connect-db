import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teacherschedule',
  templateUrl: './teacherschedule.component.html',
  styleUrls: ['./teacherschedule.component.scss']
})
export class TeacherscheduleComponent implements OnInit {
  actions=[1,2];
  option:number;
  userID:string = this.dataService.getToken();


  constructor(private dataService: ApiService) { }
  rs:any;


  ngOnInit(): void {
  }

  changesec(){
    console.log(this.option);
    this.dataService.teacherschedule(this.option,this.userID).pipe(first()).subscribe(
      data => {
        //console.log("result.ts file");
        this.rs=this.dataService.getTeacherschedule();
        console.log(this.rs);

      },
      error => {
        alert("SOS");
      });
  }

}
