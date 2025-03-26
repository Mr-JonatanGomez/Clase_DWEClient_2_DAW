import { Component } from '@angular/core';
import { Post } from './../../model/post';
import { DataService } from '../../services/data.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  posts?: Post[];
  /* posts:Post[] = [] */

  constructor(private dataService: DataService) {
    /* this.posts = dataService.getPostsById(2); */
    /* metodo para hacerlo por array interno
    
    this.posts = dataService.getAllPost();
    
    */

    /* metodo real con API */
    this.dataService.getAllPostURL().subscribe((data)=>{
      this.posts=data.posts
    })
  }
}
