import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-reactive',
  templateUrl: './formulaire-reactive.component.html',
  styleUrls: ['./formulaire-reactive.component.css']
})
export class FormulaireReactiveComponent implements OnInit {

  
  reactiveForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      courriel: new FormControl('', [Validators.email, Validators.required]),
      telephone: new FormControl(''),
      communication: new FormControl('courriel', [Validators.required]),
      motifs: new FormControl (['un', 'Deux', 'Trois']),
      message: new FormControl(''),
      datepicker: new FormControl(''),

    });
  }

}
