import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  baseUrl = 'https://api.gameofthronesquotes.xyz/v1/';
  constructor(private http: HttpClient) { }

  getRandomQuotes() : Observable<Quote>{
    return this.http.get<Quote>(this.baseUrl + 'random');
  }

  getSeveralRandomQuotes(number: number) : Observable<Quote[]>{
    return this.http.get<Quote[]>(this.baseUrl + 'random/' + number);
  }

  getQuotesFromCharacter(author: string,number: number) : Observable<Quote>{
    return this.http.get<Quote>(this.baseUrl + 'author/' + author +'/' + number);
  }

}
