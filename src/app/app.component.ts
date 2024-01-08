import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RallyCarsComponent } from './rally-cars/rally-cars.component';
import { MessagesComponent } from './messages/messages.component';
import { CarFormComponent } from './car-form/car-form.component';
import { EditCarComponent } from './editcar/editcar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RallyCarsComponent,
    MessagesComponent,
    CarFormComponent,
    RouterLink,
    EditCarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Rally Cars';
}
