import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recherche } from '../recherche';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
recherche: Recherche = {

  nom: '',
  code: '',
  description: ''
}



  constructor() { }

  ngOnInit(): void {
  }

}
