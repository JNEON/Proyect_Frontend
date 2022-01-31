import { Component , OnInit } from '@angular/core';
import { GRILLAS } from './components/posts/Mock-Grilla';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Buen cine';

  grillas = GRILLAS;
  filterPost: string = '';

  constructor(){}
  ngOnInit(){
  }
}


