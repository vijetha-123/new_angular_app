import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

  
  @Input() total=1;
  
  min=true;
  @Output() countEmitter=new EventEmitter();
  @Output() quantityEmitter=new EventEmitter();

postValue(){
  this.countEmitter.emit(this.total);
  this.quantityEmitter.emit(this.total);
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
  constructor() { }
  ngOnInit(): void {
  }
}


