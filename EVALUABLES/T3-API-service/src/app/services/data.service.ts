import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../model/team';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga"

  
  
  //private api = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain"
  constructor(private clienteHTTP:HttpClient) { }

  public getAllTeamsURL():Observable <any>{
    return this.clienteHTTP.get(this.api)
  }

  public getTeamsByIdURL(idTeam:number):Observable <Team>{
    return this.clienteHTTP.get<Team>(`${this.api}/`)
  }
//https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Atletico%20Madrid
//https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga
  /* public getTeamsByCity(ciudad:string):Observable <any>{

    // Aqui hacer la logica de filtrar

    return this.clienteHTTP.get(this.api)
  } */
}
