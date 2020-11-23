import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../server/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetail: any = {}
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  mobilePattern: any = "^((\\+91-?)|0)?[0-9]{10}$"
  item_qty: number = 1;
  myTitle: any = "Add Product";
  button: any = "Submit";
  responseMessage: any;
  productID: any;
  productDetaildata: any;

  constructor(public server: ProductServiceService, public activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(params => {
      this.productID = Number(params.id);
      this.getProduct();
    })
  }

  ngOnInit() {
    this.getProduct()
  }
  getProduct() {
    this.server.getApi('p4').subscribe((res) => {
      this.productDetaildata = res.response
      this.productDetaildata.forEach(element => {
        if (element.ID === this.productID) {
          this.productDetail = element;
          this.item_qty = this.productDetail.product_quantity
          if (this.productDetail.product_id) {
            this.myTitle = "Update Product";
            this.button = "Update";
          }
        }
      });
    })
  }
  onSubmit() {
    Object.assign(this.productDetail, { 'product_quantity': this.item_qty })
    if (this.productDetail.product_id) { //updateproduct
      this.server.postApi('p2', this.productDetail).subscribe((res) => {
        this.responseMessage = res.responseMessage
      })
    } else {//submitproduct
      this.server.postApi('p1', this.productDetail).subscribe((res) => {
        this.responseMessage = res.responseMessage
      })
    }
  }
  incrementQty() {
    this.item_qty += 1;
  }
  decrementQty() {
    if (this.item_qty - 1 < 1) {
      this.item_qty = 1;
    }
    else {
      this.item_qty -= 1;
    }
  }
}
