import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("sale")?.setAttribute("class","button_select");

  }
  imgCollection: Array<object> = [
    {
      thumbImage: '../assets/images/slide3.png',
    }, {
      thumbImage: '../assets/images/slide1.png',
    }, {
      thumbImage: '../assets/images/slide2.png',
    }
];
}
