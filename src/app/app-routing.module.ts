import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { InputsComponent } from './inputs/inputs.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'common',
    component: CommonComponent,
  },
  {
    path: 'inputs',
    component: InputsComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
