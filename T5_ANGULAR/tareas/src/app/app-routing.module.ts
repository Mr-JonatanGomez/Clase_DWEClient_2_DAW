import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  /* pagina inicio, siempre PRIMERO */
  {path:"",redirectTo:"conocimientos", pathMatch:"full"},

  {path:"conocimientos", component:ListadoComponent},

/* esta gestionada con parametros */
  {path:"asignaturas/:id", component:AsignaturasComponent},

  /* esta gestionada navegar desde logica */
  {path:"tecnologias/:id", component:TecnologiasComponent},

  /* EN ultimo lugar la pagina de error, debe estar creada*/
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
