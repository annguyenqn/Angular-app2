import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  {path:'student',loadChildren:()=> import ('./student/student.module').then(m => m.StudentModule)},
  {path:'',component:HomeComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
