import { Component, OnInit, Input } from '@angular/core';
import { Logiciel } from '../logiciel';


@Component({
  selector: 'app-detail-test',
  templateUrl: './detail-test.component.html',
  styleUrls: ['./detail-test.component.css']
})
 @Input()logiciel?: Logiciel; 

export class DetailTestComponent {
  

}
 