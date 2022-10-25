import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  profileForm = new FormGroup({
    id: new FormControl(''),
    titre: new FormControl(''),
    type: new FormControl(''),
    annee: new FormControl(''),
    complete: new FormControl(''),
    courte: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
