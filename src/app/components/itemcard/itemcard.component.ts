import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.scss']
})
export class ItemcardComponent implements OnInit {
  @Input() srcimage:string="";
  @Input() title:string="";
  @Input() price:number=0;
  @Input() amount:number=0;

  @Output()
  propagar = new EventEmitter<number>();
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.srcimage)
  }
  menos(){
    this.amount -= 1;
    this.propagar.emit(this.amount*this.price);
  }
  mas(){
    this.amount += 1;
    this.propagar.emit(this.amount*this.price);
  }
}
