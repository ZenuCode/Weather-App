import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { checkData, fullData } from '../shared/home-page/interface';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  getData(city: string) : Observable<fullData> {
    const dataAPIKey = 'a266ba08106e5b71f88764ca0adbcf9d';
    const cityURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${dataAPIKey}`;
    return this.http.get<fullData>(cityURL);
  }

  headers = new HttpHeaders({
    'X-Api-Key': 'ZeEZfu5pVo7PbRKobj2p1A==sNi6bu9xYzUB3q4X',
  });

  checkCity(city: string) : Observable<checkData[]> {
    const checkURL = `https://api.api-ninjas.com/v1/city?name=${city}`;
    return this.http.get<checkData[]>(checkURL, { headers: this.headers });
  }
}
