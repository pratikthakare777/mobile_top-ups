import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Country interface
export interface Country {
  // Add relevant properties based on API response
  code: string;
  name: string;
  // Add other properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://preprod-dvs-api.dtone.com/v1/products';
  private apiKey = '3edf7e36-ee39-412a-ab59-eedbb99e5f98';
  private apiSecret = '84c04f9e-32f7-4f05-a78e-b30e18d75cf2';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    // Set up headers with API key and secret
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(this.apiKey + this.apiSecret)}`,
      'Content-Type': 'application/json'
    });

    // Make the GET request and return the observable
    return this.http.get<Country[]>(this.apiUrl, { headers });
  }
}
