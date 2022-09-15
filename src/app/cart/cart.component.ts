import { Component, OnInit } from '@angular/core';
import * as products from "../data/products.json";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
