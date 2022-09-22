import { Component, OnInit } from '@angular/core';
import * as products from "../data/products.json";

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css']
})
export class IndoorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any =(products as any).default;

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

