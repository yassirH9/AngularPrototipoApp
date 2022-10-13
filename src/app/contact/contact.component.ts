import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email:string;
  name:string;
  message:string;

  constructor() {
    this.email="";
    this.name="";
    this.message="";
   }

  ngOnInit(): void {
  }
  submit(){
    if(this.email=="" && this.name=="" && this.message==""){
      document.getElementById('email')!.style.borderColor="red";
      document.getElementById('name')!.style.borderColor="red";
      document.getElementById('message')!.style.borderColor="red";

    }else{
      window.location.href="/contactsended";
    }
  }
}
