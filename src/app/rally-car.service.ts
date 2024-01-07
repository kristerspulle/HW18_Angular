import { Injectable } from '@angular/core';
import { Car } from './Car';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RallyCarService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getRallyCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:3000/rallyCars').pipe(
      tap((_: Car[]): void => this.log('fetched cars')),
      catchError(this.handleError<Car[]>('getCars', []))
    );
  }

  getRallyCar(id: number): Observable<Car> {
    this.messageService.add(`RallyCarService: fetched car id=${id}`);
    return this.http.get<Car>(`http://localhost:3000/rallyCars/${id}`).pipe(
      tap((_: Car): void => this.log('fetched cars')),
      catchError(this.handleError<Car>(`getCars id=${id}`))
    );
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put<Car>(`http://localhost:3000/rallyCars/${car.id}`, car, this.httpOptions).pipe(
      tap((_: Car): void => this.log(`updated car id=${car.id}`)),
      catchError(this.handleError<any>('updateCar'))
    );
  }
}
