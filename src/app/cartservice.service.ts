import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cartitem } from './cartitem';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  url:string=""
  carturl=environment.cartapi;
  constructor( private http:HttpClient) {
    this.url=this.carturl+ "/";
   }
   addToCart(product:Cartitem){
    this.http.post<Cartitem>(this.carturl,product).subscribe(data=>{
      console.log(product)
    })
   }
   getCartItems()
   {
    return this.http.get<Cartitem[]>(this.carturl);
   }

   removeItemfromCart(item:any){
    return this.http.delete(this.url + item.id)
   }
   public countSubject=new Subject<number>();
   getCount(){
    return this.getCartItems().subscribe(res =>{
      this.countSubject.next(res.length);
      console.log(this.countSubject + "inside sub")
    })
   }
}
