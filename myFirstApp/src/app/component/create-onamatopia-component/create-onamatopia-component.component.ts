import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-onamatopia-component',
  templateUrl: './create-onamatopia-component.component.html',
  styleUrls: ['./create-onamatopia-component.component.css']
})
export class CreateOnamatopiaComponentComponent implements OnInit {
  
newOnomatopia: string = "";

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter(); 

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
