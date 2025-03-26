import { Component } from '@angular/core';
import { Post } from '../../model/post';
import { DataService } from './../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  post?:Post = undefined /* post o undefined(?) igualado a undefined */



  /* Lo necesitamos para coger el endpoint y suscribir por si hay cambios
  ademas, le pasamos el dataService y cogemos el post desde el data */
constructor(
  private router:ActivatedRoute, 
  private dataService:DataService
) {
  this.router.params.subscribe(params=>{
    /* ESTE ES PARA TRABAJAR EN ARRAY
    this.post = this.dataService.getPostsById(params['id']) */

    this.dataService.getPostsByIdURL(params['id']).subscribe((data)=>{
      this.post= data


    })
  })

  
}
}
