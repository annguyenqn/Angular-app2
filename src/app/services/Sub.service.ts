import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  // dataEmitter = new EventEmitter<string>()
  dataEmitter = new Subject<string>()
  raiseDataEmitterEvent(data:string){
    this.dataEmitter.next(data)
  }

constructor() { }

}
