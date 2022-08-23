import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProperty } from '../propertylist/property';

@Injectable({
  providedIn: 'root',
})
export class PropertyDataService {
  url = 'https://alpha.buyproperly.ca/api/search/v1';
  constructor(private http: HttpClient) {}

  // getPropertyDetails() {
  //   return this.http.post(this.url, {
  //     limit: 10,
  //     offset: 0,
  //   });
  // }
  getPropertyDetails(limit: any, offset: any): Observable<IProperty[]> {
    console.log(limit, offset);

    return this.http
      .post<IProperty[]>(this.url, { limit, offset })
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
