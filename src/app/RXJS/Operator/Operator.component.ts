import { Component, OnInit } from '@angular/core';
import { fromEvent, from, Observable,of } from 'rxjs';
import { map,filter } from 'rxjs/operators';
@Component({
  selector: 'app-Operator',
  templateUrl: './Operator.component.html',
  styleUrls: ['./Operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor() { }
   arraynumber = [2,3,4,5,6,7,8,9]
   MyObservable = from(this.arraynumber)
   tranformObservable = this.MyObservable.pipe(map(data => {
    return data * 5
   }),filter(data => {
    return data > 30
   }))

  ngOnInit() {
    this.tranformObservable.subscribe({
      next:(data) => { console.log(data)},
      error:(err) => {console.log(err)},
      complete:() => {console.log('complete')}
    })
  }

}
