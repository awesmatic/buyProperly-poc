import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { LoginModel } from '../login/login.model';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'https://alpha.buyproperly.ca/api/user/v1/login';
  constructor(private http: HttpClient) {}

  // login(data: any) {
  //   return this.http.post(
  //     'https://alpha.buyproperly.ca/api/user/v1/login',
  //     data
  //   );
  // }
  getLoginDetails(email: any, password: any): Observable<LoginModel[]> {
    console.log(email, password);
    return this.http
      .post<LoginModel[]>(this.url, {
        email,
        password,
      })
      .pipe(catchError(this.handleError));
    // console.log('eeee', data.payload);
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
