import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/core/services/house.service';
import { House } from 'src/app/core/models/house.model';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.scss']
})
export class HousesListComponent implements OnInit {

  houselist!: House[] | [];
  filteredHouses!: House[] | [];
  searchTerm: string = '';
  constructor(private houseService: HouseService) {
  }

  ngOnInit() {
    this.houseService.getHouses().subscribe(value =>
      {
        this.houselist = value;
        this.filteredHouses = value;
      });
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredHouses = this.houselist.filter(
      house =>
        house.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
         house.slug.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
