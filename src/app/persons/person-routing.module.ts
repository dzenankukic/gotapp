import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsListComponent } from './pages';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';

const routes: Routes = [
  { path: 'person',   component: PersonsListComponent},
  { path: 'person/:id',   component: PersonDetailComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {}

