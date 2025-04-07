import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FilterComponent } from './components/filter/filter.component';

const routes: Routes = [
{path:'', redirectTo: 'teams', pathMatch:'full'},

{path: 'detail', component:DetailComponent},
{path: 'teams', component:TeamsComponent},
{path: 'filter', component:FilterComponent},
{path: 'error', component:ErrorComponent},
{path: '**', redirectTo:'error'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
