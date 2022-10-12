import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  name: string;
  password: string;
  password2: string;
  constructor() {
    this.email = "";
    this.password = "";
    this.password2 = "";
    this.name = "";
    document.getElementById("menu_inf")!.style.display = "none";
    document.getElementById("menu_sup")!.style.display = "none";
  }

  onSubmit(): void {
    if (this.name == "" || this.password == "" || this.password2 == "" || this.email == "") {
      document.getElementById("email")!.style.borderColor = "red";
      document.getElementById("password")!.style.borderColor = "red";
      document.getElementById("password2")!.style.borderColor = "red";
      document.getElementById("name")!.style.borderColor = "red";

    } else {
      window.location.href = "/home"
    }
  }
  onSubmitOut() {
    window.location.href = "/login";
  }
  onSubmitGuest() {
    //falta poner si el home es guest o no
    window.location.href = "";
  }
}
