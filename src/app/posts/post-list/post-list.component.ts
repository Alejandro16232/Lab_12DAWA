import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { id: 1, title: 'Explorando las Montañas'},
    { id: 2, title: 'El Arte de la Cocina Gourmet'},
    { id: 3, title: 'Innovaciones Tecnológicas en 2024'},
    { id: 4, title: 'Prácticas de Vida Sostenible'},
    { id: 5, title: 'Dominando la Fotografía Digital'}
  ];

  constructor() { }
}
