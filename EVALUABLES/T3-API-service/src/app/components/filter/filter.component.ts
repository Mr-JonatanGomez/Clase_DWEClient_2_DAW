import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../../model/team';
import { Router } from '@angular/router'
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  equiposFiltrados: Team[]=[]

  seleccionCapacidad:string = ''

  constructor(private dataService: DataService){}
  

    filtradoCapacidad() {
     //AQUI quiero el metodo para filtrar por capacidad de estadio intStadiumCapacity
    this.equiposFiltrados = this.dataService.getTeamsByCapacity(this.seleccionCapacidad)
    //ordenamos con sort
    this.equiposFiltrados.sort((a, b) => {
      return parseInt(a.intStadiumCapacity) - parseInt(b.intStadiumCapacity);
    });
    
    }
      
    
}
