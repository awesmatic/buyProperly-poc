import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(
      'https://alpha.buyproperly.ca/api/user/v1/login',
      data
    );
  }
}
