import { Component,OnInit,Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  currentCustomer: string = 'Maria';
  ageCustomer: number = 30;
  showInfoCustomer() {
    return this.currentCustomer + ' ' + this.ageCustomer;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
