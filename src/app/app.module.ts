import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RallyCarsComponent } from './rally-cars/rally-cars.component';
import { HttpClientModule } from '@angular/common/http';
import { RallyCarDetailsComponent } from './rally-car-details/rally-car-details.component';
import { MessagesComponent } from './messages/messages.component';
import { CarFormComponent } from './car-form/car-form.component';
import { EditCarComponent } from './editcar/editcar.component';

@NgModule({
  declarations: [
    AppComponent,
    RallyCarsComponent,
    RallyCarDetailsComponent,
    MessagesComponent,
    CarFormComponent,
    EditCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }