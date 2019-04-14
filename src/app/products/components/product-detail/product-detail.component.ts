import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct[];
  pageTitle = 'Product Detail';

  constructor() {}

  ngOnInit() {}
}
