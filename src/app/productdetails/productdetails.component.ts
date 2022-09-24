import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../productmodel';
import { ProductapiService } from '../productapi.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  formvalue!:FormGroup;
  showAdd!:boolean;
  showUpdate!:boolean;
  productobject:Productmodel=new Productmodel();
  productdata!:any;

  constructor(private formbuilder:FormBuilder, private pro:ProductapiService ) { }

  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      
      image:['',Validators.required],
      pname:['',Validators.required],
      pdescription:['',Validators.required],
      Status:['',Validators.required]

    })
    this.getProducts();
  }
  clickAddproducts(){
    this.formvalue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postProductdetails(){
    
    this.productobject.pname=this.formvalue.value.pname;
   
    this.productobject.pdescription=this.formvalue.value.pdescription;
    this.productobject.Status=this.formvalue.value.Status;
    this.productobject.image=this.formvalue.value.image;

    this.pro.postProducts(this.productobject).subscribe(res=>{
      console.log(res);
    alert("added new product")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formvalue.reset();
      this.getProducts();
    },
    err=>{
      alert("something went wrong")
    })

  }
  getProducts(){
    this.pro.getProductdetails().subscribe(res=>{
      this.productdata=res;
    },err=>{

    })
  }

  deleteProducts(product:any){
    this.pro.deleteProduct(product.id).subscribe(res=>{
      alert("the product deleted")
      this.getProducts();
    }),({

    })
  }
onEdit(product:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.productobject.id=product.id;
  this.formvalue.controls['pname'].setValue(product.pname);
  this.formvalue.controls['img'].setValue(product.img);
  this.formvalue.controls['pdescription'].setValue(product.pdescription);
  this.formvalue.controls['Status'].setValue(product.Status);
}
updateProductdetails(){
  
  this.productobject.pname=this.formvalue.value.pname;
  this.productobject.image=this.formvalue.value.image;
  this.productobject.pdescription=this.formvalue.value.pdescription;
  this.productobject.Status=this.formvalue.value.Status;

  this.pro.updateProduct(this.productobject,this.productobject.id).subscribe(res=>{
    
    alert(" product updated")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getProducts();
  })

}

}
