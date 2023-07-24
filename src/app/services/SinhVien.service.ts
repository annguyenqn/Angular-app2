import { Injectable,OnInit } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { SvDTO } from './SinhVienDto';
import { Observable } from 'rxjs';
const SinhVien_API = 'http://localhost:8080/endpoint/'
@Injectable({
  providedIn: 'root'
})

export class SinhVienService  {

constructor(private http:HttpClient) {


}
LoadSinhVien():Observable<SvDTO[]>{
  return this.http.get<SvDTO[]>(SinhVien_API)
}

}
