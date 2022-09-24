import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicinal } from './medicinal';

@Injectable({
  providedIn: 'root'
})
export class MedicinalService {
  constructor() { }

  med:Medicinal[]=[{
    Pid:1,
    pname:'Ashwagandha',
    pdes:'wqws',
    price:250,
    img:'../assets/images/Ashwagandha.jpg'
  },
  {
    Pid:2,
    pname:'shatavari',
    pdes:'wqws',
    price:300,
    img:'../assets/images/shatavari.jpg'

  },{
    Pid:4,
    pname:'sandalwood',
    pdes:'wqws',
    price:400,
    img:'../assets/images/sandalwood.jpg'

  },{
    Pid:5,
    pname:'Holy basil',
    pdes:'wqws',
    price:250,
    img:'../assets/images/Holy_basil.jpg'

  },{
    Pid:6,
    pname:'gurmar plant',
    pdes:'wqws',
    price:320,
    img:'../assets/images/gurmar plant.jpg'

  },{
    Pid:7,
    pname:'gooseberry',
    pdes:'wqws',
    price:150,
    img:'../assets/images/gooseberry.jpg'

  },
  {
    Pid:8,
    pname:'gale of the wind',
    pdes:'wqws',
    price:280,
    img:'../assets/images/gale of thewind.jpg'

  },{
    Pid:9,
    pname:'Brahmi leaves',
    pdes:'wqws',
    price:340,
    img:'../assets/images/Brahmi leaves.jpg'

  }
];

  public getdetails():any{
    const medObservable=new Observable(observe => { setTimeout(()=>{ observe.next(this.med);}, 1000); });
    return medObservable;

    
  }
}

