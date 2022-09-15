import { Component, OnInit } from '@angular/core';
import * as seedproduct from '../seeds.json';
@Component({
  selector: 'app-seedsdeals',
  templateUrl: './seedsdeals.component.html',
  styleUrls: ['./seedsdeals.component.css']
})
export class SeedsdealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seed:any=(seedproduct as any).default;

  productdetail=false;

  showproductDetailsToggle(){
    this.productdetail=!this.productdetail;
  }
  toggleContent(){
    var content='';
    if(this.productdetail)
    {
      content='fa-solid fa-arrow-up';
    }
    else
    {
      content='fa-solid fa-arrow-down';
    }
    return content;
  }

}
