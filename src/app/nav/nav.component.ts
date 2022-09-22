import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
   public random="";
   productentered:string=' '
   search_product(product_name:string):void{
    if(!product_name){
      this.productentered='';
    }
    this.productentered=product_name;
   }
   constructor(private authservice:UserService){}
   auth:boolean=false;
  ngOnInit(): void {
    this.authservice.authSubject.subscribe(data=>{
      console.log('auth inside nav component:' + data);
      this.auth=data;
    });

  }


}
