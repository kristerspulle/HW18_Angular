import { Component } from '@angular/core';
import { Car } from '../Car';
import { rallyCars } from '../mock-rally-cars';
import { NgFor } from '@angular/common';
import { RallyCarDetailsComponent } from '../rally-car-details/rally-car-details.component';

@Component({
  selector: 'app-rally-cars',
  standalone: true,
  imports: [ NgFor, RallyCarDetailsComponent ],
  templateUrl: './rally-cars.component.html',
  styleUrl: './rally-cars.component.css',
})
export class RallyCarsComponent {
  cars: Car[] = rallyCars;
  selectedCar!: Car;

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}
