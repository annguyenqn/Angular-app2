import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appChanel',
  templateUrl: './appChanel.component.html',
  styleUrls: ['./appChanel.component.css']
})
export class AppChanelComponent implements OnInit {

  constructor() {
    setTimeout(()=>{
      this.name = 'child was check'
    })
   }
  @Input() name:string =''
  ngOnInit() {
  }

}
