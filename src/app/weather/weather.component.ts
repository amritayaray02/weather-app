import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public latlong : any;
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService) { 
    this.weatherSearchForm = new FormGroup({});
  }
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues) {
    console.log(formValues);
    this.apixuService.getlatlong(formValues.location).subscribe(data => {
      this.latlong = data;
      console.log(this.latlong[0].lat);
    });
    this.apixuService.getWeather(this.latlong[0].lat, this.latlong[0].lon).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}
