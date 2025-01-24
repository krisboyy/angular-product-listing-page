import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FilterComponent } from "./filter/filter.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FilterComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  filters: {battery: number[], price: string} = {battery: [], price:''};
  title = 'product-listing-page';

  onFilterChange(newFilter: {battery: number[], price: string}){
    this.filters=newFilter;
  }
}
