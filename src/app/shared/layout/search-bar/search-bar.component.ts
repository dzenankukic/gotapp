import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() searchQuery = new EventEmitter<string>();
  searchTerm: string = '';

  search() {
    this.searchQuery.emit(this.searchTerm);
  }

}
