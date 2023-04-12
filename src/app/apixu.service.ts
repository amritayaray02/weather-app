import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getlatlong(location){
    return this.http.get(
      'http://api.openweathermap.org/geo/1.0/direct?q='+location+'&appid=50ca38d7434086e134b8ae35aa0b5414'
    )
  }
  getWeather(lat, lon){
      return this.http.get(
          'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=50ca38d7434086e134b8ae35aa0b5414&units=metric'
      );
  }
}
