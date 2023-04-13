import { Component,  OnInit } from '@angular/core';
//import { Logiciel } from '../logiciel';
import { LOGICIELS } from '../liste-logiciels';
import { Logiciel } from '../logiciel';

@Component({
  selector: 'app-logiciels',
  templateUrl: './logiciels.component.html',
  styleUrls: ['./logiciels.component.css']
})
export class LogicielsComponent implements OnInit {
logiciels = LOGICIELS;
selectionLogiciel?: Logiciel;

  constructor() {}

  ngOnInit(): void {

  }

  onSelect(logiciel: Logiciel) : void {
    this.selectionLogiciel = logiciel;
  }

}
