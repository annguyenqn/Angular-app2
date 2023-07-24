import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ObservableComponent } from './RXJS/Observable/Observable.component';
import { OperatorComponent } from './RXJS/Operator/Operator.component';
import { DropBoxComponent } from './DropBox/DropBox.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { Sub1Component } from './sub/Sub1/Sub1.component';

const routes: Routes = [
  {path:'student',loadChildren:()=> import ('./student/student.module').then(m => m.StudentModule)},

  {path:'observable',component:ObservableComponent, pathMatch:"full"},
  {path:'operator',component:OperatorComponent, pathMatch:"full"},
  {path:'subject',component:Sub1Component, pathMatch:"full"},
  {path:'dropbox',component:DropBoxComponent, pathMatch:"full"},
  // {path:'student',component:StudentListComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
