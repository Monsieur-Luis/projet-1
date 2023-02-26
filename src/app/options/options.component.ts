import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  public monGraphique = {
    type: <ChartType>'bar',
    legende: true,
    plugins:[],
    options: { responsive: true, maintainAspectRatio: false }
  };

  public mesDonnees: ChartData<'bar', number[], string | string[]> = {
    labels: ['Hôtels', 'Spa', 'Auberges'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40 ], label: 'Accessible aux personnes handicapées' },
      { data: [28, 48, 40, 19, 86, 27, 90 ], label: 'Menu sans allergènes' },
      { data: [28, 48, 40, 19, 86, 27, 90 ], label: 'Animaux acceptés' }
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }

}
