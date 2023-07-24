import { Component, OnInit } from '@angular/core';
import { SinhVienService } from '../services/SinhVien.service';
import { SvDTO } from '../services/SinhVienDto';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-DropBox',
  templateUrl: './DropBox.component.html',
  styleUrls: ['./DropBox.component.css']
})
export class DropBoxComponent implements OnInit {
  SinhVienList!:SvDTO[]
  selectedStudent!: string;
  constructor(private sinhVienSerice:SinhVienService) {

   }
   changeName(e: any){
     this.selectedStudent = e.target.value
   }

  ngOnInit() {
    this.sinhVienSerice.LoadSinhVien().subscribe(
      {
        next:(data) => {this.SinhVienList = data}
      }
    )

  }
}
