import { Component, EventEmitter, Output } from '@angular/core';
import { CartProductComponent } from "./cart-product/cart-product.component";

@Component({
  selector: 'app-cart',
  imports: [CartProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Output() closeCartEvent = new EventEmitter();
  
  closeCart(){
    this.closeCartEvent.emit();
  }
}
