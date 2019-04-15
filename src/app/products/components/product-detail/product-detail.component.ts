import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  pageTitle = 'Product Detail';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'Something',
      productCode: 'some-code',
      releaseDate: 'April 16, 2019',
      description: 'Some product description',
      price: 19.95,
      starRating: 3.2,
      imageUrl: ''
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
