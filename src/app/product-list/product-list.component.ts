import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productList!: Product[];

  constructor(private productService: ProductService){
    this.productList = this.productService.productList;
    console.log("Got product list!", this.productList)
  }
}
