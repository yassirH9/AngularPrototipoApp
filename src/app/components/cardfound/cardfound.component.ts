import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cardfound',
  templateUrl: './cardfound.component.html',
  styleUrls: ['./cardfound.component.scss']
})
export class CardfoundComponent implements OnInit {
  @Input() srcimage:string="";
  @Input() title:string="";
  @Input() price:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
