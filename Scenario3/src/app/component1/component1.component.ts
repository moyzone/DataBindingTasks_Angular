import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Input() public parentData;

  constructor() { }

  @Output() public childEvent= new EventEmitter();

  send(message){
    this.childEvent.emit(message);
  }

  ngOnInit() {
    
  }

}
