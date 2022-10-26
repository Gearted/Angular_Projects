import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchFilmComponent implements OnInit {

  profileForm = this.fb.group({
    id: ['', Validators.required],
    titre: [''],
    type: [''],
    annee: [''],
    complete: [''],
    courte: [''],
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
