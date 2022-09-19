import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  con:Contact[]=[
    {
      pnum:9876594032,
      ptime:'Timings: From 8:00 am to 8:00 pm',
      pname:'Plantgallery',
      pdes:'Address: FNP Estates, Ashram Marg, Sultanpur Mandi Road, Gadaipur, Chhatarpur Farms, DLF Farms, New Delhi, Delhi 110030',
      pmail:'plantgallery@gmail.com'

    }
  ]
  public getContactdetails():any{
    const contactObseravable=new Observable(observe=>{
      setTimeout(() => {
        observe.next(this.con);
      }, 1000);
      
    });
    return contactObseravable;
  }
}
