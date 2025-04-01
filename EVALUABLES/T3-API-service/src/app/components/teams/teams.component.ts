import { Component } from '@angular/core';
import { Team } from '../../model/team';
import { DataService } from '../../services/data.service';
import { subscribe } from 'diagnostics_channel';


@Component({
  selector: 'app-teams',
  standalone: false,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
teams?:Team[]

constructor(private dataService:DataService){





  this.dataService.getAllTeamsURL().subscribe((data)=>
  this.teams= data.teams)
}



}
