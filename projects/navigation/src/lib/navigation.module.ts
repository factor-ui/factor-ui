import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FactorCommonModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class NavigationModule { }
