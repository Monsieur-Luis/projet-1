import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

import { ForfaitService } from '../forfait.service';
@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
forfaits: Forfait[] = []; 
  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.forfaitService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }


}
