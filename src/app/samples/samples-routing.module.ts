import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

const routes: Routes = [
  { path: 'infinite-scroll', component: InfiniteScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
