import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character, Quote, QuotesService } from 'src/app/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  person: Character | any;
  constructor(private router: Router,private route: ActivatedRoute,private characterService: CharactersService, private quotesService: QuotesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      var param = params['id'];
      var person = this.characterService.getCharactersDetailsQuotes(param);
      person.subscribe((value: any) => {
        this.person = value[0];
      })
    });
  }

  getRandomQuotes(){
    var quotes = this.quotesService.getSeveralRandomQuotes(5);
    var newQuotes;
    quotes.subscribe((value: Array<Quote>) =>{
      newQuotes = value.map(x => x.sentence);
      this.person.quotes = newQuotes;
    });
  }

}
