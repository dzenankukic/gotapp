import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HouseDetailComponent, HousesListComponent } from './pages';
import { HouseRoutingModule } from './house-routing.module';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    //UKLJUCITI SHARED MODULE I TAMO TRPAT OSTALO
    SharedModule,
    HouseRoutingModule
  ],
  declarations: [ HousesListComponent, HouseDetailComponent ]
})
export class HouseModule {
}
