import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-sup-bar',
  templateUrl: './menu-sup-bar.component.html',
  styleUrls: ['./menu-sup-bar.component.scss']
})
export class MenuSupBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //para realizar la busqueda en json y redirigir a la pagina result
  search(){

  }
  //para redirigir a la pagina de usuario si la variable de control esta true si no envia al login
  userdata(){
    if(document.getElementById('submenu')!.style.display === "none"){
      document.getElementById('submenu')!.style.display = "block";
    }else{
      document.getElementById('submenu')!.style.display = "none";
    }
  }
  notimplementyet(){
    alert("This functionality is not yet implemented")
  }
  acercade(){
    window.location.href ="/acercade"
  }
  logout(){
    window.location.href="/login"
  }
}
