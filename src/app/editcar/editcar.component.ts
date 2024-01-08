import { Component, Input } from '@angular/core';
import { RallyCarService } from '../rally-car.service';
import { Car } from '../Car';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location, NgIf } from '@angular/common';

@Component({
  selector: 'app-editcar',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './editcar.component.html',
  styleUrl: './editcar.component.css'
})

export class EditCarComponent {
  constructor(
    private rallyCarService: RallyCarService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRallyCar();
  }

  getRallyCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rallyCarService
      .getRallyCar(id)
      .subscribe((car: Car): Car => (this.car = car));
  }

  goBack(): void {
    this.location.back()
  }

  goHomepage(): void {
    this.router.navigate(['/'])
  }

  save(): void {
    if(this.car) {
      this.rallyCarService.updateCar(this.car).subscribe((): void => this.goHomepage())
    }
  }

  @Input() car?: Car;
}
