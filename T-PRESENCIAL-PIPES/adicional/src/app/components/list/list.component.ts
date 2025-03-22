import { Component } from '@angular/core';
import { Post } from './../../model/post';
import { DataService } from '../../services/data.service';

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
    this.posts = dataService.getAllPost();
    /* this.posts = dataService.getPostsById(2); */
  }
}
