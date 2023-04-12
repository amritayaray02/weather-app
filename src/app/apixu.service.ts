import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getlatlong(location){
    return this.http.get(
      'http://api.openweathermap.org/geo/1.0/direct?q='+location+'&appid=APIKEY'
    )
  }
  getWeather(lat, lon){
      return this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=APIKEY&units=metric'
      );
  }
}
