import { Component, OnInit } from '@angular/core';
import { Cartitem } from '../cartitem';
import { CartserviceService } from '../cartservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartser: CartserviceService,private router:Router) { }

  carts:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:'0',
    img:'',
    quantity:1,
    totalprice:1
  }
//countervalue:number=0;
  cartData: any=[];
  totalprice:number=0;
  quantity=1;
  totalPrice(data:any){
    debugger
    const initialValue=0;
    this.cartData=data;
    const a=this.cartData.reduce((sum:any,item :any)=> sum+(item.price * item.quantity),initialValue);
    return a;
  }
  Countervalue(count:any){
    //this.countervalue=count;
}

  cart:Cartitem[]=[];
  delete(deleteitem:Cartitem){
    this.cartser.removeItemfromCart(deleteitem).subscribe(()=>console.log(deleteitem.pname));

    
    const Toast=Swal.mixin({
      toast:true,
      position:'top',
      showConfirmButton:false,
      timer:3000,timerProgressBar:true
    })
    Toast.fire({
      icon:'error',
      title:'item deleted successfully'
    })
    this.ngOnInit();
  }
  onClick(){
    this.router.navigate(['/medplants'])
  }

  ngOnInit(): void {
    this.cartser.getCartItems().subscribe((response)=>{
      this.cart=response;
      console.log(this.cart);
    })
   
  }
  

}
