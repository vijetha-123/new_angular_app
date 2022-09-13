import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  title = 'HEY THERE!';
  public img1='/assets/images/1.jpg';
  public img2='/assets/images/2.jpg';
  public img3='/assets/images/3.jpg';

  ngOnInit(): void {
  }

}
