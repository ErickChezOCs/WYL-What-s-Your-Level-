import { Component,  OnInit } from '@angular/core';
import { Logiciel } from '../logiciel';

@Component({
  selector: 'app-logiciels',
  templateUrl: './logiciels.component.html',
  styleUrls: ['./logiciels.component.css']
})
export class LogicielsComponent implements OnInit {
  logiciel: Logiciel = {
    id: 1,
    nom: "Ms-Excel"
  };

  constructor() {}

  ngOnInit(): void {

  }

}
