import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { subscribe } from 'diagnostics_channel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
team?:Team = undefined


constructor(
  private route:ActivatedRoute, private router:Router){
  
  
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  //this.team= this.router.getCurrentNavigation()?.extras.state?.['team']

  this.team = history.state.team
  console.log('Objeto team en DetailComponent:', this.team);
  

}
}


