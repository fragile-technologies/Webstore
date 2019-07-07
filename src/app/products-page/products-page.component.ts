import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Array<Product>;

  constructor(productService: ProductsService) {
    this.products = productService.getAllProducts();
  }

  ngOnInit() {
  }

}
