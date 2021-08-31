import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}
  products: any;
  categoryId: any;
  showItems: boolean=true;
  items: any;
  cartList: Array<any>=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
      if (this.categoryId != undefined) {
        this.showItems=false;
        this.productService.getProductsByCategoryId(this.categoryId).subscribe(
          (response) => {
            this.products = response;
          },
          (err) => {
            console.log(err);
          }
        );
        
      } else {
        this.showItems=true;
        this.productService.getProducts().subscribe(
          (response) => {
            this.products = response;
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
    
  }
  addToCart(product:any){
   this.items=localStorage.getItem("cart");
   if(this.items == null){
     this.cartList = [];
   }
   else{
    this.cartList = JSON.parse(this.items);
   }  
   this.cartList.push(product);
   localStorage.setItem("cart",JSON.stringify(this.cartList));
   console.log(localStorage.getItem("cart"))
  }
}
