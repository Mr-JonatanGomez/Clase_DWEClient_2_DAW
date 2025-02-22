import { Component } from '@angular/core';
import { Conocimiento } from '../../model/modelos';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-listado',
  standalone: false,
  
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  nombre = "Jonatan"
  nombreConocimiento=""
  nivelConocimiento=""

  conocimientos:Conocimiento[]= []

  /* para la directiva IF de mostrarConocim. */
  mostrar=false

  guardarConocimiento(){
    if (this.nombreConocimiento.length==0 || this.nivelConocimiento.length==0) {
      /* Si estan vacios un alert */
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Someone of your fields are empty!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }else{
      
      /* Creamos variable conocimiento */
      let conocimiento:Conocimiento = {
        nombre:this.nombreConocimiento,
        nivel:this.nivelConocimiento
      }
  
      /* Guardamos el conocimiento al ArRRAY PRINCIPAL */
      this.conocimientos.push(conocimiento)
  
      this.vaciarDatosForm()
  
      console.log(this.nombreConocimiento);
      console.log(this.nivelConocimiento);
      
    }
    }
    

  vaciarDatosForm(){
    this.nombreConocimiento=""
    this.nivelConocimiento=""
  }


  mostrarConocimientos() {
    this.mostrar=!this.mostrar
    /* logica para  hacer que si pulsas haga 
    lo contrario de lo que este, si se esta mostrando se oculta, 
    si esta oculto, se muestra */

  }
}
