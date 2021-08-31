import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from '../services/productDetail.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productDetail: any;
  productStarArray:Array<number>= [];
  imageUrls:Array<any> = [];
  showImageUrl: any;
  constructor(
    private productDetailService: ProductDetailService,
    private activatedRoute: ActivatedRoute
  ) {}
  productId: any;
  ngOnInit(): void {
    this.productStarArray =[];
    this.activatedRoute.params.subscribe((params) => {
      this.productId = params['productId'];
      this.productDetailService.getProductDetailByProductId(this.productId).subscribe(
        (response)=>{
         this.productDetail = response[0];  
         this.showImageUrl = this.productDetail.imageUrl;
         this.imageUrls = this.productDetail.imageUrls;       
         let starCount = this.productDetail.star;// 4
         for (let index = 0; index < starCount; index++) {
            this.productStarArray.push(index);
           
         }
        },
        (err) =>{
          console.log(err);
        }
      )
    });
  }

  getImageUrlByColor(color:any)
  {
    this.showImageUrl = this.imageUrls.find(x=>x.color == color)?.url;
  }
}
