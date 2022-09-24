import { Component, Input, OnInit } from '@angular/core';
import { Medicinal } from '../medicinal';
import { MedicinalService } from '../medicinal.service';
//cart
import { Cartitem } from '../cartitem';
import { CartserviceService } from '../cartservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-medplants',
  templateUrl: './medplants.component.html',
  styleUrls: ['./medplants.component.css']
})
export class MedplantsComponent implements OnInit {
  constructor(public medi:MedicinalService, private cartser:CartserviceService) { }
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
  @Input() product:any;


  medic:Medicinal[]=[];
  ngOnInit(): void {
    const medObservable=this.medi.getdetails();
      medObservable.subscribe((medplant:Medicinal[])=>{
        this.medic=medplant;
      });
    
  }
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
