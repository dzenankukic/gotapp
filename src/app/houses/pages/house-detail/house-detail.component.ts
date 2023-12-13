import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House, HouseService } from 'src/app/core';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  house: House | any;
  constructor(private router: Router,private route: ActivatedRoute,private houseService: HouseService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      var param = params['id'];
      var person = this.houseService.getHouseDetail(param);
      person.subscribe((value: any) => {
        this.house = value[0];
      })
    });
  }

}
