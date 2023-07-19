import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { student } from '../../models/students';
import { studentType } from '../../models/students';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-student-template-form',
  templateUrl: './student-template-form.component.html',
  styleUrls: ['./student-template-form.component.css']
})
export class StudentTemplateFormComponent implements OnInit {
  student!: student
  constructor(private studentService:StudentService,
    private router:Router,private route:ActivatedRoute){
  }
  studentType: studentType[] =[
    {
      key: 0,
      value: 'Good'
    },
    {
      key: 1,
      value: 'Bad'
    }
]
  studentPass(object:any){
    console.log(object)
  }
  ngOnInit() {
    this.student = {} as student
    this.route.params.subscribe((data: Params) => {
        return this.studentService.getAStudent(data['id']).subscribe((data: student) => {
          this.student = data
      });
    })
  }
  handleSubmit(object: any) {
    console.log(object)
  }
  back() : void {
    this.router.navigate(['/student'])
  }

}
