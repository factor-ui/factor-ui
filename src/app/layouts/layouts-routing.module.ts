import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sidenav1Component } from './sidenav1/sidenav1.component';

const routes: Routes = [
  {
    path: 'sidenav1',
    component: Sidenav1Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
