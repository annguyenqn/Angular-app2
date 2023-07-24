import { Component, OnInit } from '@angular/core';
import { SinhVienService } from '../services/SinhVien.service';
import { SvDTO } from '../services/SinhVienDto';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';
import { student } from '../models/students';
@Component({
  selector: 'app-DropBox',
  templateUrl: './DropBox.component.html',
  styleUrls: ['./DropBox.component.css']
})
export class DropBoxComponent implements OnInit {
  SinhVienList!:student[]
  selectedStudent!: string;
  constructor(private studentSerice:StudentService) {

   }
   changeName(e: any){
     this.selectedStudent = e.target.value
   }

  ngOnInit() {
    this.studentSerice.getStudent().subscribe(
      {
        next:(data) => {this.SinhVienList = data}
      }
    )

  }
}
