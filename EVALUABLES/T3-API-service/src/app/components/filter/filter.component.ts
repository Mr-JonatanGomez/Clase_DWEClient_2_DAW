import { Component } from '@angular/core';
import { Team } from '../../model/team';
import { Router } from '@angular/router'

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  seleccionCapacidad:number= 0
  teams?: Team[]



  filtradoCapacidad(){
   this.teams
  }
}
