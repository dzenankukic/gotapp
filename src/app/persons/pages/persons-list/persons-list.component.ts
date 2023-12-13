import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  personsList!: Character[] | [];
  filteredPersons!: Character[] | [];
  constructor(private houseService: CharactersService) {
  }

  personsName = this.personsList?.filter(x => x.name);
  searchTerm: string = '';

  ngOnInit() {
    this.houseService.getListOfCharacters().subscribe(value =>
      {
        this.personsList = value;
        this.filteredPersons = value;
      });
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredPersons = this.personsList.filter(
      person =>
        person.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
         person.slug.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
