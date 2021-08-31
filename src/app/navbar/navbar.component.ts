import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCount:number = 0;
  cartList : any;
  constructor() { }

  ngOnInit(): void {
   this.calculateCart();
  }

  calculateCart(): void{
    let cartList = localStorage.getItem("cart");
    if(cartList == null){
      this.cartCount = 0;
    }
    else{
      this.cartList = JSON.parse(cartList)
      this.cartCount = this.cartList.length;
    }
  }

}
