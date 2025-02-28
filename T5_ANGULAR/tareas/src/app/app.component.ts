import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tareas'
  autor= 'Jose Jonatan Gomez'
  seleccion=1

  constructor(private router:Router){
    /* OJO el router el de @ngular router, no el de express */
  }
  navegarLogica(){
    console.log("procedo a navegar");
    /* dentro le pasamos el path y tambien podemos un identificador, por eso 
    es un array */
    this.router.navigate(["tecnologias",3])
    
  }


}
