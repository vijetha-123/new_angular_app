import { Component, OnInit } from '@angular/core';
import * as pro from './seeds.json';
@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.css']
})
export class SeedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  seeds:any=(pro as any).default;
}


