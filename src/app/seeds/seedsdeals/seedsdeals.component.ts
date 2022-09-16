import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-seedsdeals',
  templateUrl: './seedsdeals.component.html',
  styleUrls: ['./seedsdeals.component.css']
})
export class SeedsdealsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  @Input()products:any

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
