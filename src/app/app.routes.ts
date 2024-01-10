import { Routes } from '@angular/router';
import { RallyCarsComponent } from './rally-cars/rally-cars.component';
import { RallyCarDetailsComponent } from './rally-car-details/rally-car-details.component';
import { CarFormComponent } from './car-form/car-form.component';
import { EditCarComponent } from './editcar/editcar.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  {path: '', component: RallyCarsComponent},
  {path:'car/:id', component: RallyCarDetailsComponent},
  {path:'addcar', component: CarFormComponent},
  {path:'editcar/:id', component: EditCarComponent},
  {path:'404', component: NotFoundComponent},
  {path:'**', component: NotFoundComponent}
];
