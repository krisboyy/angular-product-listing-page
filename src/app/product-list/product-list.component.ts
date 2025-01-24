import { Component, Input } from '@angular/core';
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
  @Input({required: true}) filters!: {battery: number[], price: string}

  get productList(){
    return this.productService.productList(this.filters)
  }

  constructor(private productService: ProductService){}
}
