import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sub1Component } from './Sub1/Sub1.component';
import { Sub2Component } from './Sub2/Sub2.component';
import { SubService } from '../services/Sub.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Sub1Component,
    Sub2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[
    Sub1Component,
    Sub2Component,
  ],
  providers:[
    SubService,
  ]
})
export class SUBModule { }
