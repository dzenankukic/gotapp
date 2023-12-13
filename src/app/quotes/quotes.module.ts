import { NgModule } from '@angular/core';
import { QuoteDetailComponent, QuotesListComponent } from './pages';
import { SharedModule } from '../shared';
import { QuotesRoutingModule } from './quotes-routing.module';



@NgModule({
  imports: [
    //UKLJUCITI SHARED MODULE I TAMO TRPAT OSTALO
    SharedModule,
    QuotesRoutingModule
  ],
  declarations: [ QuotesListComponent, QuoteDetailComponent ],
  providers: []
})
export class QuoteModule {
}
