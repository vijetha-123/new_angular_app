import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }



  products =[{
    "pid":"001",
"image":'/assets/images/8.jpg',
"pname":"zz Plant",
"pdescription":"ZZ plants grow best in lots of indirect light (direct sunlight can cause the leaves to scorch)",
"Status":"In Stock"
  },
  {
    "pid":"002",
"image":"/assets/images/9.jpg",
"pname":"Star Plant",
"pdescription":"These hardy plants have been known to survive for 30 years or longer",
"Status":"In Stock"
  },
  {
    "pid":"003",
"image":"/assets/images/10.jpg",
"pname":"Pothos Plant",
"pdescription":"pothos is one of the top houseplants for improving indoor air quality",
"Status":"Out of Stock"
  },
  {
    "pid":"004",
"image":"/assets/images/11.jpg",
"pname":"Auspcious Jade",
"pdescription":"Jade plant, with its small rounded leaf, improved environment is known to be a lucky plant.",
"Status":"In Stock"
  },{
    "pid":"005",
"image":"/assets/images/12.jpg",
"pname":"good luck",
"pdescription":"ZZ plants grow best in lots of indirect light (direct sunlight can cause the leaves to scorch)",
"Status":"In Stock"
  },{
    "pid":"006",
"image":"/assets/images/13.jpg",
"pname":"Haworthia plant",
"pdescription":"These hardy plants have been known to survive for 30 years or longer",
"Status":"Out of Stock"
  },{
    "pid":"007",
"image":"/assets/images/14.jpg",
"pname":"jade plant",
"pdescription":"ZZ plants grow best in lots of indirect light (direct sunlight can cause the leaves to scorch)",
"Status":"Out of Stock"
  },
  {
    "pid":"008",
"image":"/assets/images/15.jpg",
"pname":"money plant",
"pdescription":"These hardy plants have been known to survive for 30 years or longer",
"Status":"In Stock"
  },
  {
    "pid":"009",
"image":"/assets/images/16.jpg",
"pname":"Pink Syngonium Plant",
"pdescription":"ZZ plants grow best in lots of indirect light (direct sunlight can cause the leaves to scorch)",
"Status":"Out of Stock"
  }

]

  ngOnInit(): void {
  }

}
