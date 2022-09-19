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
    price:123,
    img:'../assets/images/Ashwagandha.jpg'
  },
  {
    Pid:1,
    pname:'shatavari',
    pdes:'wqws',
    price:123,
    img:'../assets/images/shatavari.jpg'

  },{
    Pid:1,
    pname:'sandalwood',
    pdes:'wqws',
    price:123,
    img:'../assets/images/sandalwood.jpg'

  },{
    Pid:1,
    pname:'Holy basil',
    pdes:'wqws',
    price:123,
    img:'../assets/images/Holy_basil.jpg'

  },{
    Pid:1,
    pname:'gurmar plant',
    pdes:'wqws',
    price:123,
    img:'../assets/images/gurmar plant.jpg'

  },{
    Pid:1,
    pname:'gooseberry',
    pdes:'wqws',
    price:123,
    img:'../assets/images/gooseberry.jpg'

  },
  {
    Pid:1,
    pname:'gale of the wind',
    pdes:'wqws',
    price:123,
    img:'../assets/images/gale of thewind.jpg'

  },{
    Pid:1,
    pname:'Brahmi leaves',
    pdes:'wqws',
    price:123,
    img:'../assets/images/Brahmi leaves.jpg'

  }
];

  public getdetails():any{
    const medObservable=new Observable(observe => { setTimeout(()=>{ observe.next(this.med);}, 1000); });
    return medObservable;

    
  }
}

