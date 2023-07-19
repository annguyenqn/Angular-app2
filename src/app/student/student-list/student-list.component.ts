import { Component,OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { student } from 'src/app//models/students';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: student[] = []

  constructor(private studentService: StudentService) {


  }
  ngOnInit(): void {
    this.studentService.getStudent().subscribe((data: student[]) =>{
      console.log(data)
      this.students = data
    })

  }
  handleRemove(event: student) {
    this.students = this.students.filter((pokemon : student) => {
      return pokemon.id !== event.id;
    })
  }

  title:string = "an"
}
