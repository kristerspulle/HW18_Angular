import { Component } from '@angular/core';
import { Car } from '../Car';
import { RallyCarService } from '../rally-car.service';
import { NgFor } from '@angular/common';
import { RallyCarDetailsComponent } from '../rally-car-details/rally-car-details.component';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rally-cars',
  standalone: true,
  imports: [ NgFor, RallyCarDetailsComponent, RouterLink ],
  templateUrl: './rally-cars.component.html',
  styleUrl: './rally-cars.component.css',
})
export class RallyCarsComponent {
  cars: Car[] = [];

  constructor(private rallyCarService: RallyCarService, private messageService: MessageService) {}

  getRallyCars(): void {
    this.rallyCarService.getRallyCars()
      .subscribe((cars: Car[]): Car[] => this.cars = cars);
  }
  
  ngOnInit(): void {
    this.getRallyCars();
  }
}
