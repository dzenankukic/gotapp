import { Component, OnInit } from '@angular/core';
import { Quote, QuotesService } from 'src/app/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  quotesList: Quote[] | undefined;
  constructor(private quoteService: QuotesService) {
  }

  ngOnInit() {
    this.quoteService.getSeveralRandomQuotes(5).subscribe(value =>
      {
        this.quotesList = value
      });
  }

  getRandomQuotes(){
    var quotes = this.quoteService.getSeveralRandomQuotes(5);
    var newQuotes;
    quotes.subscribe((value: Array<Quote>) =>{
      newQuotes = value.map(x => x.sentence);
      this.quotesList = value;
    });
  }

}
