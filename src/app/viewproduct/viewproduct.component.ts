import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../server/productservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  productDetail: any;

  constructor(public server: ProductServiceService, public router: Router) { }

  ngOnInit() {
    this.getProduct()
  }
  getProduct() {
    this.server.getApi('p4').subscribe((res) => {
      this.productDetail = res.response
    })
  }
  goto(productid) {
    this.router.navigate(['/Product'],
      {
        queryParams: {
          id: productid
        }
      })
  }
  deleteProduct(pId) {
    let data = {
      id: pId
    }
    this.server.postApi('p3', data).subscribe((res) => {
      this.getProduct();
    })
  }

}
