import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import {student} from'src/app/models/students'
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
 @Input() detail!: student
 @Output()remove: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
