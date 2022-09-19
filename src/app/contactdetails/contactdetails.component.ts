import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  constructor(public conta: ContactService) { }
  contac: Contact[] = [];
  ngOnInit(): void {
    const contactObservable = this.conta.getContactdetails();
    contactObservable.subscribe((contacts:Contact[])=>{
      this.contac=contacts;
    });
    }
  }



