import { Component, OnInit,Input } from '@angular/core';
import { Cartitem } from 'src/app/cartitem';
import { CartserviceService } from 'src/app/cartservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-seedsdeals',
  templateUrl: './seedsdeals.component.html',
  styleUrls: ['./seedsdeals.component.css']
})
export class SeedsdealsComponent implements OnInit {

  constructor(private cartser:CartserviceService) { }
  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalprice:1
  }
  quantity:number=1;

  addtoCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalprice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=product.pid;
    this.cartser.addToCart(this.cart);
    console.log(product.id);
    const Toast=Swal.mixin({
      toast: true,
      position:'top',
      showConfirmButton: false,
      timer:3000,
      timerProgressBar:true
    })
    Toast.fire({
      icon:'success',
      title:'item added successfully'
    })
   
    this.cartser.getCount();
  }
  
  ngOnInit(): void {
  }
  @Input()product:any

  productdetail=false;
  showproductDetailsToggle(){
    this.productdetail=!this.productdetail;
  }
  toggleContent(){
    var content='';
    if(this.productdetail)
    {
      content='fa-solid fa-arrow-down';
    }
    else
    {
      content='fa-solid fa-arrow-up';
    }
    return content;
  }

}
