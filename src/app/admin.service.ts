import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public authSubject=new Subject<boolean>();

  validateAuth(data:boolean){
    this.authSubject.next(data);
  }
  //hosturl=environment.userapi;
  
  value?:boolean;
  getAuthStatus(){
    this.authSubject.subscribe(
      data=>{
        console.log('inside user service: ' + data);
        this.value=data;
        console.log('inside user service 11:' + this.value);
      }
    );
    return this.value;
  }
  
    constructor() { }
  }
