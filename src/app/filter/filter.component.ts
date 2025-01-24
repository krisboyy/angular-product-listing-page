import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { type Filter } from '../filter';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent{
  @Output() emitFilters = new EventEmitter<{battery: number[], price: string}>();
  selectedBattery: number[] =[];
  selectedPrice = '';

  updateBatteryFilter(event: Event, capacity: number){
    const isChecked = (event.target as HTMLInputElement).checked;

    if(isChecked){
      this.selectedBattery.push(capacity);
    } else{
      this.selectedBattery = this.selectedBattery.filter(c => c!==capacity);
    }
    this.emitFilters.emit({battery: this.selectedBattery, price: this.selectedPrice});
  }

  updatePriceFilter(event: Event){
    this.selectedPrice = (event.target as HTMLSelectElement).value;
    this.emitFilters.emit({battery: this.selectedBattery, price: this.selectedPrice});
  }
}
