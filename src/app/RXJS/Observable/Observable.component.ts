import { Component, OnInit } from '@angular/core';
import { fromEvent, from, Observable,of } from 'rxjs';
@Component({
  selector: 'app-Observable',
  templateUrl: './Observable.component.html',
  styleUrls: ['./Observable.component.css']
})
export class ObservableComponent implements OnInit {
   getResult = (num: number) =>{
    if(num % 2 ==0){
      throw new Error('invaled number');

    }return num*2
   }
  constructor() { }
  myObservable = new Observable((observer) => {
    console.log('observable start')
    setTimeout(()=> {
      observer.next(this.getResult(1))
    },1000)
    setTimeout(()=> {
      observer.next(this.getResult(2))// next dùng để phát ra data
    },2000)
    // setTimeout(()=> {
    //   observer.error(new Error('có gì đó sai sai !'))
    // },3000)
    // trong quá trình phát ra data nếu có erro thì các data tiếp theo không được phát ra
    setTimeout(()=> {
      observer.next(this.getResult(3))
    },4000)
    setTimeout(()=> {
      observer.next(this.getResult(4))
    },5000)
    setTimeout(()=> {
      observer.complete()
    },6000)
    // sau complete thì dù data còn nhưng sẽ không được phát ra
  } )
  // myObservable2 = Observable.create((observer) => {

  // })
  // arrayNumber = [1,2,3,4,5]
  // arrayChar = ['A','B','C','D']
  // ObserverOfSomething = of(this.arrayNumber,this.arrayChar)
  ngOnInit() {
    //hàm call back đầu tiên thực thi mỗi khi obervable trả về new data, còn call back thứ 2 sẽ được thực thi khi observable trả về erro
    this.myObservable.subscribe( (data) =>{

     console.log(data)
    },(error) => {
     // error này sẽ được gán với đới tượng erro ở trong observalbe ở trên
     // trong này ta sẽ xử lý logic khi xảy ra lỗi
     // đây cũng là chỗ khác với promise là ta có thể handle erro nếu nó xảy ra vì nó không trả về nguyên pack data như promise
     alert(error.messsage)

    }, ()=>{
      // ở call back thứ 3 thì ta không cần tham số vì đã hoàn thành việc hứng data, ở đây ta sẽ xử lý với data sau khi observale đã trả về một tín hiệu đầy đủ.
     alert('Complete')
    })
  }

}
