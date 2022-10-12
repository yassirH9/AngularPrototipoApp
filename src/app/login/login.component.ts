import { Component, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserData } from '../interface/user-data';
import userdatajson from 'src/assets/archivements/users.json';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements UserData {
  email:string;
  password:string;
  userList:{email:string,password:string}[]=userdatajson;
  constructor() { 
    this.email = "";
    this.password="";
    document.getElementById("menu_inf")!.style.display="none";
    document.getElementById("menu_sup")!.style.display="none";
  }

  onSubmit():void{
    const userfinder = this.userList.find(x=> x.email===this.email && x.password===this.password);
    if(userfinder !=null){
      window.location.href = "/home";
    }else{
      console.log("login error");
      window.location.reload();
      document.getElementById("email")!.style.borderColor="red";
      document.getElementById("password")!.style.borderColor="red";
    }
  }
  onSubmit2(){
    window.location.href = "/register";
  }
  onSubmitOut(){
    window.location.href ="/home";
  }
  onSubmitGuest(){
    //falta poner si el home es guest o no
    window.location.href = "";
  }
}
