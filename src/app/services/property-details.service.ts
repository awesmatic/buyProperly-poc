import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { PropertyDetailsModel } from '../property-details/propertyDetails.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailsService {
  url =
    'https://alpha.buyproperly.ca/api/property/v1/details/slurp/W-Airport-Blvd-Sugarland-Texas';
  constructor(private http: HttpClient) {}

  getPropertyDetails(): Observable<PropertyDetailsModel[]> {
    return this.http
      .get<PropertyDetailsModel[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
