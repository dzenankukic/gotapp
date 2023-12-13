import { NgModule } from '@angular/core';
import { PersonDetailComponent, PersonsListComponent } from './pages';
import { SearchBarComponent, SharedModule } from '../shared';
import { PersonRoutingModule } from './person-routing.module';
import { FilterPipe } from '../shared/pipes/filter.pipe';


@NgModule({
  imports: [
    //UKLJUCITI SHARED MODULE I TAMO TRPAT OSTALO
    SharedModule,
    PersonRoutingModule
  ],
  declarations: [ PersonsListComponent, PersonDetailComponent ],
  providers: []
})
export class PersonModule {
}
