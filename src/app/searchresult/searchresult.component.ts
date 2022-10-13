import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { zip } from 'rxjs';
import itemdatajson from '../../assets/archivements/product.json';
import {itemdata} from '../interface/item-data';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit{
  result:any;
  name:string="";
  itemList:{name:string,price:number,url:string}[]=itemdatajson;
  constructor(private route: ActivatedRoute) {
   }
  private sub: any;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
   });
    console.log("Query:"+this.name);
    
    
    // const itemfinder = this.itemList.find(x=> {
    //   if(x.name.includes(this.name)){

    //   }
    // });
    this.result = this.itemList.filter(x=> x.name.includes(this.name))
    console.log(this.result);
  }

}
