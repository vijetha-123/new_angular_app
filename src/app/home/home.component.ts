import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'Plant Gallery';
  public img1='/assets/images/111.jpeg';
  public img2='/assets/images/t.jpg';
  public img3='/assets/images/indoor-plants.jpg';
 
  ngOnInit(): void {
  }

}
