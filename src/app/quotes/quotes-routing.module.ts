import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteDetailComponent, QuotesListComponent } from './pages';

const routes: Routes = [
  { path: 'quote',   component: QuotesListComponent},
  { path: 'quote/:id',   component: QuoteDetailComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule {}

