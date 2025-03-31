import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  seleccionTag:string=""
  posts?:Post[]

  /* injectamos aqui el metodo del servicio en el constructor*/
  constructor(private dataService:DataService){

  }
  Filtrado(){
    console.log(this.seleccionTag);
    /* Aqui el getAllPostTag... del service */
    this.dataService.getAllPostTagURL(this.seleccionTag).subscribe((data)=>{
      /* console.log(data.posts); */
      this.posts = data.posts
      
    })
    
  }
}
