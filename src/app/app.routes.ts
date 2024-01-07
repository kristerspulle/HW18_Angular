import { Routes } from '@angular/router';
import { RallyCarsComponent } from './rally-cars/rally-cars.component';
import { RallyCarDetailsComponent } from './rally-car-details/rally-car-details.component';

export const routes: Routes = [
  {path: '', component: RallyCarsComponent},
  {path:'car/:id', component: RallyCarDetailsComponent}
];
