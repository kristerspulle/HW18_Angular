import { Injectable } from '@angular/core';
import { Car } from './Car';
import { rallyCars } from './mock-rally-cars';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RallyCarService {

  constructor(private messageService: MessageService, private http: HttpClient) { }
  private rallyCarURL: string = 'http://localhost:3000/rallyCars'
  getRallyCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.rallyCarURL);
  }

  getRallyCar(id: number): Observable<Car | undefined> {
    const car = rallyCars.find((car: Car): boolean => car.id === id)
    this.messageService.add(`RallyCarService: fetched car id=${id}`)
    return of(car)
  }
}
