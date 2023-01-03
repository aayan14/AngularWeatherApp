import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Weatherdata } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class weatherService {
  constructor(private httpclient: HttpClient) {}
  getWeatherData(cityName: string): Observable<Weatherdata> {
    return this.httpclient.get<Weatherdata>(environment.baseUrl, {
      params: { format: 'json', u: 'c', location: cityName },
      headers: {
        'X-RapidAPI-Key': environment.rapidAPIKey,
        'X-RapidAPI-Host': environment.rapidAPIHost,
      },
      // .set('units', 'metric')
      // .set('mode', 'json'),
    });
  }
}
