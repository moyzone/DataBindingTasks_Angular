import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public childMessage = '';
  public childData = '';
  public message = '';
  send(message){
    this.childMessage=message;
  }

  constructor() { }

  ngOnInit() {
  }

}
