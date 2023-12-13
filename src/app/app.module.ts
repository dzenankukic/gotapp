import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HousesListComponent } from './houses/pages/houses-list/houses-list.component';
import { HouseModule } from './houses/house.module';
import { PersonModule } from './persons/person.module';
import { QuoteModule } from './quotes';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HouseModule,
    QuoteModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
