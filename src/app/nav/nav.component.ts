import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  onClick(){
    window.alert("enter valid details");
  }
   public random="";
   productentered:string=' '
   search_product(product_name:string):void{
    if(!product_name){
      this.productentered='';
    }
    this.productentered=product_name;
   }
  ngOnInit(): void {
  }

}
