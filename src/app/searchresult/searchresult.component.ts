import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import itemdatajson from '../interface/item-data';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})
export class SearchresultComponent implements OnInit {
  name:string="";
  constructor(private route: ActivatedRoute) {
   }
  private sub: any;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
   });
    console.log("Query:"+this.name);
      
  }

}
