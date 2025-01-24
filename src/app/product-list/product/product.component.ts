import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { ImgPipe } from "../../img.pipe";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-product',
  imports: [ImgPipe, FontAwesomeModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  faStar = faStar;

  constructor(private productService: ProductService){}

  addProductToCart(){
    this.productService.addProductToCart(this.product);
  }
}
