import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  baseUrl = 'https://api.gameofthronesquotes.xyz/v1/';
  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]>{
    return this.http.get<House[]>(this.baseUrl + "houses");
  }

  getHouseDetail(houseName: string) : Observable<House>{
    return this.http.get<House>(this.baseUrl + 'house/' + houseName);
  }
}
