import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from '../services/student.service';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudentListComponent,
    StudentDetailComponent,
  ],
  providers:[
    StudentService
  ]
})
export class StudentModule { }
