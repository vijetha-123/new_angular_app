import { Component, OnInit } from '@angular/core';
import { Medicinal } from '../medicinal';
import { MedicinalService } from '../medicinal.service';
@Component({
  selector: 'app-medplants',
  templateUrl: './medplants.component.html',
  styleUrls: ['./medplants.component.css']
})
export class MedplantsComponent implements OnInit {

  constructor(public medi:MedicinalService) { }
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
      content='fa-solid fa-arrow-up';
    }
    else
    {
      content='fa-solid fa-arrow-down';
    }
    return content;
  }


}
