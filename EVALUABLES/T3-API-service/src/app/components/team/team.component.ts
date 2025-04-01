import { Component, Input } from '@angular/core';
import { Team } from '../../model/team';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team',
  standalone: false,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @Input() team?:Team | undefined

  constructor(private router: Router){

  }


  verDetalles(){
    console.log(this.team);
    this.router.navigate(['/detail'], { state: { team: this.team } });
  }
}
