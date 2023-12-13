import { Component, OnInit } from '@angular/core';
import { HouseService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'gotapp';
  /**
   *
   */
  constructor(private houseService: HouseService) {
  }

  ngOnInit() {

  }
}
