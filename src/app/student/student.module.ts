import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from '../services/student.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StudentTemplateFormComponent } from './student-template-form/student-template-form.component';
import { HomeComponent } from '../Home/Home.component';
// import { StudentTemplateFormComponent } from './student-template-form/student-template-form.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: StudentListComponent },
      // { path: 'form', component: ReactiveFormsComponent },
      { path: ':id', component:StudentTemplateFormComponent }
    ]
  }
];

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    StudentListComponent,
    StudentDetailComponent,
    StudentTemplateFormComponent,
    RouterModule,
  ],
  providers:[
    StudentService
  ]
})
export class StudentModule { }
