import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../services/productDetail.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  cartList:Array<any> = [];
  card:any;
  constructor(
   
  ) { }
  ngOnInit(): void 
  {
    this.card=localStorage.getItem("card");
this.cartList=JSON.parse(this.card);
  }

}
