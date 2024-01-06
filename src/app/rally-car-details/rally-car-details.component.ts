import { Component, Input } from '@angular/core';
import { Car } from '../Car';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rally-car-details',
  standalone: true,
  imports: [ FormsModule, NgIf ],
  templateUrl: './rally-car-details.component.html',
  styleUrl: './rally-car-details.component.css'
})
export class RallyCarDetailsComponent {
  @Input() car?: Car
}