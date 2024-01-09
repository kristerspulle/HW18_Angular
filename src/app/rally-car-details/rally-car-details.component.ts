import { Component, Input } from '@angular/core';
import { Car } from '../Car';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { RallyCarService } from '../rally-car.service';

@Component({
  selector: 'app-rally-car-details',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './rally-car-details.component.html',
  styleUrl: './rally-car-details.component.css',
})
export class RallyCarDetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private rallyCarService: RallyCarService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getRallyCar();
  }
  
  getRallyCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rallyCarService.getRallyCar(id)
      .subscribe((car: Car): Car => this.car = car);
  }

  goBack(): void {
    this.location.back()
  }

  delete(car: Car): void {
    this.rallyCarService.deleteCar(car).subscribe((): void => {
      alert('Car has been deleted.')
      this.goBack()})
  }
  
  @Input() car?: Car;
}
