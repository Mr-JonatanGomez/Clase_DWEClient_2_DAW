import { Component, Input } from '@angular/core';
import { Post } from '../model/post';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  //los campartibles necesitan el @Input de core

  
  @Input() post?:Post
  //luego donde usamos este componente con su selector [post]="item" (o lo que se)
}
