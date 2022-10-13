import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-sended',
  templateUrl: './contact-sended.component.html',
  styleUrls: ['./contact-sended.component.scss']
})
export class ContactSendedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    window.location.href ="/home"
  }
}
