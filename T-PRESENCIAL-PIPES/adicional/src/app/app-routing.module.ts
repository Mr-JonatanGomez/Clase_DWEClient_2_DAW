import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'home',redirectTo: 'home', pathMatch:'full'},
  {path:'detail', component:DetailComponent},
  {path:'list', component:ListComponent},
  {path:'**', component:ErrorComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
