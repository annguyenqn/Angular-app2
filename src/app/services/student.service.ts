import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http'
import {student} from '../models/students'
import { Observable } from 'rxjs';
const STUDENT_API = 'http://localhost:3000/student'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

constructor(private http:HttpClient) {
 }
 getStudent():Observable<student[]>{
  return this.http.get<student[]>(STUDENT_API)
 }

}
