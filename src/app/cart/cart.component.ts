import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  srcimage1:string = "https://i.ebayimg.com/images/g/ChsAAOSwXrpfbI4~/s-l600.jpg";
  title1:string ="3090ti Founder Edit"
  price1:number = 1000;
  srcimage2:string = "https://i.ebayimg.com/images/g/ChsAAOSwXrpfbI4~/s-l600.jpg";
  title2:string ="3050ti Founder Edit"
  price2:number = 400;
  constructor() { }

  ngOnInit(): void {
    document.getElementById("cart")?.setAttribute("class","button_select");
  }
  amt1:number = 0;
  procesaPropagar(amount:any){
    console.log("card 1: "+amount);
    this.amt1 = amount;
    this.procesaTotal();
  }
  amt2:number = 0;
  procesaPropagar2(amount:any){
    console.log("card 2: "+amount);
    this.amt2 = amount;
    this.procesaTotal();
  }
  totalamount:number=0;
  procesaTotal(){
    this.totalamount = this.amt1+this.amt2;
  }
  pay(){

    console.log("TotalCost: "+this.totalamount)
  }
}
