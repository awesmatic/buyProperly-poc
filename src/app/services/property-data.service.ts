import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PropertyDataService {
  url = 'https://alpha.buyproperly.ca/api/property/v1';
  constructor(private http: HttpClient) {}

  getPropertyDetails() {
    return this.http.get(this.url);
  }
}
