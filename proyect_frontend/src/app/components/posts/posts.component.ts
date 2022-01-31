import { Component, OnInit } from '@angular/core';
import { GRILLAS } from './Mock-Grilla';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  grillas = GRILLAS;

  constructor() { }
  filterPost = '';
  ngOnInit() {
  }
}
