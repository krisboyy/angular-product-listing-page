import { Injectable } from '@angular/core';
import { Product } from './product';
import { Filter } from './filter';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private filter: Filter = {
    battery: {
      '5000': false,
      '5200': false
    },
    price: {
      "lt10000": false,
      "10-15": false,
      "gt15000": false
    }
  }

  private products: Product[] = [
    {
      name: 'realme 12x 5G',
      color: 'Coral Red',
      rom: '128',
      expandable: 2000,
      ram: '8',
      screenSize: 6.72,
      displaySpec: 'Full HD+ Display',
      rearCameraDetails: [50, 2],
      frontCameraDetails: [8],
      battery: 5000,
      soc: 'Dimensity 6100+',
      price: 13499,
      mrp: 18999,
      image: 'realme-12x',
      stock: 5,
      avgRating: 4.4,
    },
    {
      name: 'realme C61',
      color: 'Marble Black',
      rom: '128',
      expandable: 2000,
      ram: '6',
      screenSize: 6.74,
      displaySpec: 'IPS LCD, 90Hz, 560 nits (HBM)',
      rearCameraDetails: [32],
      frontCameraDetails: [5],
      battery: 5000,
      soc: 'Unisoc Tiger T612',
      price: 7699,
      mrp: 8999,
      image: 'realme-c61',
      stock: 15,
      avgRating: 4.1,
    },
    {
      name: 'realme Narzo N61',
      color: 'Voyage Blue',
      rom: '128',
      expandable: 2000,
      ram: '6',
      screenSize: 6.74,
      displaySpec: 'IPS LCD, 90Hz, 560 nits (HBM)',
      rearCameraDetails: [32],
      frontCameraDetails: [5],
      battery: 5000,
      soc: 'Unisoc Tiger T612 (12 nm)',
      price: 8680,
      mrp: 9499,
      image: 'realme-narzo-n61',
      stock: 12,
      avgRating: 4.0,
    },
    {
      name: 'realme P2 Pro 5G',
      color: 'Parrot Green',
      rom: '128',
      expandable: undefined,
      ram: '8',
      screenSize: 6.7,
      displaySpec: 'OLED, 120Hz, 2000 nits peak',
      rearCameraDetails: [50, 8],
      frontCameraDetails: [32],
      battery: 5200,
      soc: 'Snapdragon 7s Gen 2 (4 nm)',
      price: 19999,
      mrp: 27999,
      image: 'realme-p2-pro',
      stock: 20,
      avgRating: 4.7,
    },
    {
      name: 'realme 14 Pro+',
      color: 'Pearl White',
      rom: '256',
      expandable: undefined,
      ram: '12',
      screenSize: 6.7,
      displaySpec: 'AMOLED Display',
      rearCameraDetails: [50, 8],
      frontCameraDetails: [32],
      battery: 5000,
      soc: 'Snapdragon 7s Gen 3',
      price: 29999,
      mrp: 34999,
      image: 'realme-14-pro-+',
      stock: 10,
      avgRating: 4.6,
    },
    {
      name: 'realme C63 5G',
      color: 'Ocean Green',
      rom: '128',
      expandable: 2000,
      ram: '8',
      screenSize: 6.5,
      displaySpec: '120Hz Eye Comfort Display (625nits)',
      rearCameraDetails: [32],
      frontCameraDetails: [8],
      battery: 5000,
      soc: 'Dimensity 6300',
      price: 10999,
      mrp: 12999,
      image: 'realme-c63',
      stock: 15,
      avgRating: 4.2,
    },
    {
      name: 'realme P1 5G',
      color: 'Phoenix Red',
      rom: '128',
      expandable: 2000,
      ram: '8',
      screenSize: 6.67,
      displaySpec: '120Hz AMOLED (FHD+)',
      rearCameraDetails: [50, 2],
      frontCameraDetails: [16],
      battery: 5000,
      soc: 'MediaTek Dimensity 7050',
      price: 15999,
      mrp: 21999,
      image: 'realme-p1',
      stock: 8,
      avgRating: 4.3,
    },
  ];

  private userCart: Product[] = [];

  productList(filter: {battery: number[], price: string}) {
    return this.products.filter(product => {
      const batteryMatch = filter.battery.length === 0 || 
                          filter.battery.includes(product.battery);
      
      const priceMatch = this.checkPriceRange(product.price, filter.price);
      
      return batteryMatch && priceMatch;
    });
  }

  private checkPriceRange(price: number, range: string): boolean {
    switch(range) {
      case 'lt10000': return price < 10000;
      case '10000-15000': return price >= 10000 && price <= 15000;
      case 'gt15000': return price > 15000;
      default: return true;
    }
  }

  get usersCart() {
    this.userCart =

      localStorage.getItem('usersCart') === null
        ? []
        : JSON.parse(localStorage.getItem('usersCart')!);
    return this.userCart;
  }

  addProductToCart(product: Product) {
    this.userCart.push(product);
    localStorage.setItem('usersCart', JSON.stringify(this.userCart));
  }

  removeProductFromCart(product: Product) {
    const index = this.userCart.findIndex(
      (p) => p.name === product.name
    );

    if (index > -1) {
      this.userCart.splice(index, 1);
      localStorage.setItem('usersCart', JSON.stringify(this.userCart));
    }
  }
}
