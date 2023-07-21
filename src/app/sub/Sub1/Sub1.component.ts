import { Component, OnInit } from '@angular/core';
import { SubService } from 'src/app/services/Sub.service';


@Component({
  selector: 'app-Sub1',
  templateUrl: './Sub1.component.html',
  styleUrls: ['./Sub1.component.css']
})
export class Sub1Component implements OnInit {

  constructor(private dataservice:SubService) {

   }

  ngOnInit() {
  }
  enteredText:string =''
 OnbtnClick(){
  // console.log(this.enteredText)
  this.dataservice.raiseDataEmitterEvent(this.enteredText)
 }
}
