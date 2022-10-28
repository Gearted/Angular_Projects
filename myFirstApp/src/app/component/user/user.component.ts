import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  name = 'Doe';
  firstName = 'John';
  age = 25;
  quote = '';
  photo = 'https://randomuser.me/api/portraits/lego/2.jpg';

  onKeyDownEvent(event: any){
    this.quote = event.target.value;
  }

  isDisplay = false;
  
  toggleDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
