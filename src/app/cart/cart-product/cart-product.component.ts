import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../product';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ImgPipe } from "../../img.pipe";

@Component({
  selector: 'app-cart-product',
  imports: [DecimalPipe, CommonModule, ImgPipe],
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss'
})
export class CartProductComponent {

  get products() {
    return this.productService.usersCart;
  }

  constructor(private productService: ProductService){}

  removeProductFromCart(product: Product){
    this.productService.removeProductFromCart(product)
  }
  
}
