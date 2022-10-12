import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-inf-bar',
  templateUrl: './menu-inf-bar.component.html',
  styleUrls: ['./menu-inf-bar.component.scss']
})
export class MenuInfBarComponent {
  constructor() {

  }

  ngOnInit(): void {
  }
  onCLKsale(){
    document.getElementById("sale")?.setAttribute("class","button_select");
    document.getElementById("home")?.setAttribute("class","button_nonselect");
    document.getElementById("cart")?.setAttribute("class","button_nonselect");
    window.location.href = "/sale";
  }
  onCLKhome(){
    document.getElementById("sale")?.setAttribute("class","button_nonselect");
    document.getElementById("home")?.setAttribute("class","button_select");
    document.getElementById("cart")?.setAttribute("class","button_nonselect");
    window.location.href = "/home";
  }
  onCLKcart(){
    document.getElementById("sale")?.setAttribute("class","button_nonselect");
    document.getElementById("home")?.setAttribute("class","button_nonselect");
    document.getElementById("cart")?.setAttribute("class","button_select");
    window.location.href = "/cart";
  }
}
