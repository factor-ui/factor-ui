import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FactorCommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    ToolbarComponent,
    NavbarComponent
  ]
})
export class NavigationModule { }
