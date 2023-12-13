import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl = 'https://api.gameofthronesquotes.xyz/v1/';
  constructor(private http: HttpClient) { }

  getListOfCharacters() : Observable<Character[]>{
    return this.http.get<Character[]>(this.baseUrl + 'characters');
  }

  getCharactersDetailsQuotes(name: string) : Observable<Character>{
    return this.http.get<Character>(this.baseUrl + 'character/' + name).pipe(map((result: any) => {return result}));
  }
}
