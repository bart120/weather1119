import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class WeatherService {

    constructor(private http: HttpClient) { }

    getWeatherByCity(city: string): Observable<Weather> {
        return this.http.get<Weather>(`${environment.url}&q=${city}`);
    }

}
