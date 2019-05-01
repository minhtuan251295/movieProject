import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  status: boolean = false;
  @Output() emitStatus = new EventEmitter();
  @Input() Ghe;
  
  constructor() { }
  datGhe(){
    this.status  = !this.status;
    this.emitStatus.emit(this.status);
  }
  ngOnInit() {
  }

}
