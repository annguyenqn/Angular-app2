import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ChangeDetection',
  templateUrl: './ChangeDetection.component.html',
  styleUrls: ['./ChangeDetection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit {
  name:string = 'decorate font end'
  topicName:string = 'change decorate in angular'
  isVisible:boolean = true
  CreationDate:Date = new Date()
  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() =>{
      this.topicName = 'On Push Strategy in angular'
      console.log('topic name change to',this.topicName)
      this.cdr.detectChanges()
       // có on push thì angular sẽ k check this component, nếu ta sử dụng markforcheck thì như thông báo cho angular biết thiscomponent có sự thay đổi
    },3000)
  }
  getInfo() {
    return '1m view | 31k subs'
  }

  ngOnInit() {
  }

}
