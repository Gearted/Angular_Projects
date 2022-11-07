import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onomatopeia',
  templateUrl: './onomatopeia.component.html',
  styleUrls: ['./onomatopeia.component.css']
})
export class OnomatopeiaComponent implements OnInit {

  onomatopoeiaList: Array<string> = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
