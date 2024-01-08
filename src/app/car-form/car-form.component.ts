import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RallyCarService } from '../rally-car.service';
import { Car } from '../Car';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css',
})
export class CarFormComponent {

  constructor(
    private rallyCarService: RallyCarService,
    private location: Location
  ) {}
  
  cars: Car[] = [];
  carName: string = '';
  carImage: string = '';
  carDrivetrain: string = '';
  carHorsepower: string = '';

  getRallyCars(): void {
    this.rallyCarService
      .getRallyCars()
      .subscribe((cars: Car[]): Car[] => (this.cars = cars));
  }

  ngOnInit(): void {
    this.getRallyCars();
  }

  goBack(): void {
    this.location.back();
  }

  addCar(): void {
    if (
      !this.carName ||
      !this.carImage ||
      !this.carDrivetrain ||
      !this.carHorsepower
    ) {
      alert('All fields must be filled')
      return;
    }
    const newCar: Car = {
      id: Math.random(),
      name: this.carName,
      image: this.carImage,
      drivetrain: this.carDrivetrain,
      horsepower: this.carHorsepower,
    };

    this.rallyCarService.addCar(newCar).subscribe((car: Car): void => {
      this.cars.push(car);
      this.clearForm();
      this.goBack();
    });
  }

  clearForm(): void {
    this.carName = '';
    this.carImage = '';
    this.carDrivetrain = '';
    this.carHorsepower = '';
  }
}
