import { Component,  OnInit } from '@angular/core';
//import { Logiciel } from '../logiciel';
import { LOGICIELS } from '../liste-logiciels';

@Component({
  selector: 'app-logiciels',
  templateUrl: './logiciels.component.html',
  styleUrls: ['./logiciels.component.css']
})
export class LogicielsComponent implements OnInit {
 logiciels = LOGICIELS;

  constructor() {}

  ngOnInit(): void {

  }

}
