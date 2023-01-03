import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Weatherdata } from './models/weather.model';
import { weatherService } from './service/weatherService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherservice: weatherService) {}
  city: string = 'Mumbai';
  weatherdata?: Weatherdata;
  ngOnInit(): void {
    this.getWeatherData(this.city);
  }
  onSubmit() {
    this.weatherdata = undefined;
    this.getWeatherData(this.city);
  }

  private getWeatherData(city: string) {
    this.weatherservice.getWeatherData(city).subscribe({
      next: (response) => {
        this.weatherdata = response;
        console.log(response);
      },
    });
  }
}
