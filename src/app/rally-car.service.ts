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
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
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

  updateCar(car: Car): Observable<Car> {
    return this.http
      .put<Car>(
        `http://localhost:3000/rallyCars/${car.id}`,
        car,
        this.httpOptions
      )
      .pipe(
        tap((_: Car): void => this.log(`updated car id=${car.id}`)),
        catchError(this.handleError<Car>('updateCar'))
      );
  }

  addCar(car: Car): Observable<Car> {
    return this.http
      .post<Car>('http://localhost:3000/rallyCars', car, this.httpOptions)
      .pipe(
        tap((newCar: Car): void => this.log(`added car w/ id=${newCar.id}`)),
        catchError(this.handleError<Car>('addCar'))
      );
  }

  deleteCar(car: Car): Observable<Car> {
    return this.http
      .delete<Car>(
        `http://localhost:3000/rallyCars/${car.id}`,
        this.httpOptions
      )
      .pipe(
        tap((deleteCar: Car): void => this.log(`deleted car w/ id=${deleteCar.id}`)),
        catchError(this.handleError<Car>('deleteCar'))
      );
  }
}
