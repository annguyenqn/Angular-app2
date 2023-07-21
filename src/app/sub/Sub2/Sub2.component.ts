import { Component, OnInit } from '@angular/core';
import { SubService } from 'src/app/services/Sub.service';


@Component({
  selector: 'app-Sub2',
  templateUrl: './Sub2.component.html',
  styleUrls: ['./Sub2.component.css'],
})
export class Sub2Component implements OnInit {

  constructor(private dataservice:SubService) {

   }
   inputText:string =''
  ngOnInit() {

    this.dataservice.dataEmitter.subscribe(
      {
        next:(data)=> { this.inputText = data}
      }
    )
  }

}
