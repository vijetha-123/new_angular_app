import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:any | undefined;
 @Input('product')
 set pname(pname:any){
  this.name=pname || 'Not found';
  console.log(pname);
 }
 get pname():string {

 return this.name;
 }

}
