import { Component, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-header',
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isCartOpen: boolean = false;
  constructor(private productService: ProductService){}

  get usersCart(){
    return this.productService.usersCart;
  }

  get usersCartLength(){
    return this.usersCart.length;
  }

  openCart(){
    this.isCartOpen=true;
  }

  closeCart(){
    this.isCartOpen=false;
  }

}
