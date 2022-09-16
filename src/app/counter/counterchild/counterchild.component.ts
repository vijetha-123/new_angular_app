import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

  constructor() { }
  total=1;
  min=true;
  @Output() countEmitter=new EventEmitter();

postValue(){
  this.countEmitter.emit(this.total);
}

  ngOnInit(): void {
  }
  
  decrement(){
    if(this.total==1){
      this.min=false;
    }
    else{
      this.total--;
    this.min=true;
    
    }
    this.postValue();

  }
  increment(){
   
    this.total++;
    this.min=true;
     this.postValue();
  }
  
}


