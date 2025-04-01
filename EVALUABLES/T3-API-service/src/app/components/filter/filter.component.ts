import { Component } from '@angular/core';
import { Team } from '../../model/team';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  seleccionCapacidad:number= 0
  teams?: Team[]



  filtradoCity(){
    //this.dataService
  }
}
