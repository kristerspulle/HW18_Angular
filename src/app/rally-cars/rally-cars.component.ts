import { Component } from '@angular/core';
import { Car } from '../Car';
import { RallyCarService } from '../rally-car.service';
import { NgFor } from '@angular/common';
import { RallyCarDetailsComponent } from '../rally-car-details/rally-car-details.component';
import { RouterLink } from '@angular/router';
import { CarFormComponent } from '../car-form/car-form.component';
import { EditCarComponent } from '../editcar/editcar.component';

@Component({
  selector: 'app-rally-cars',
  standalone: true,
  imports: [ NgFor, RallyCarDetailsComponent, RouterLink, CarFormComponent, EditCarComponent ],
  templateUrl: './rally-cars.component.html',
  styleUrl: './rally-cars.component.css',
})
export class RallyCarsComponent {

  constructor(private rallyCarService: RallyCarService) {}

  cars: Car[] = [];

  getRallyCars(): void {
    this.rallyCarService.getRallyCars()
      .subscribe((cars: Car[]): Car[] => this.cars = cars);
  }
  
  ngOnInit(): void {
    this.getRallyCars();
  }

  
}
