import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  weather: Weather = null;

  constructor(private serv: WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('city', this.route.snapshot.params.cityname);
    if (this.route.snapshot.params.cityname) {
      this.serv.getWeatherByCity(this.route.snapshot.params.cityname).subscribe(data => { this.weather = data; console.log(data); });
    } else {
      this.serv.getWeatherByCity('paris').subscribe(data => { this.weather = data; console.log(data); });
    }
  }

  doRefresh(ev: any): void {
    this.serv.getWeatherByCity('paris').subscribe(data => { this.weather = data; console.log(data); ev.target.complete(); });
  }

}
