import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CartserviceService } from '../cartservice.service';
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
   constructor(private authservice:UserService,private cartserv:CartserviceService){}
   auth:boolean=false;
   cartCount:number=0;
  ngOnInit(): void {
    this.authservice.authSubject.subscribe(data=>{
      console.log('auth inside nav component:' + data);
      this.auth=data;
    });

    this.cartserv.getCartItems().subscribe((res)=>{
      this.cartCount=res.length;
      console.log(this.cartCount);
    })
    this.cartserv.countSubject.subscribe((res)=>{
      this.cartCount=res;
      console.log(this.cartCount);
    })

  }


}
