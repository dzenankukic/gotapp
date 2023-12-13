import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseDetailComponent, HousesListComponent } from './pages';

const routes: Routes = [
  { path: 'house',   component: HousesListComponent},
  { path: 'house/:id',   component: HouseDetailComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule {}

