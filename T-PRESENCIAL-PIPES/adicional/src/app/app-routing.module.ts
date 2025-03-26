import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  /* a detail como usa endpoints le damos parametros */
  {path:'detail/:id', component:DetailComponent},
  {path:'list', component:ListComponent},
  {path:'error', component:ErrorComponent},
  {path:'**', redirectTo: 'error'},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
