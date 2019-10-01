import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';

import { CommonModule as FactorCommonModule } from 'factor-common';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidesheetComponent } from './sidesheet/sidesheet.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchboxComponent,
    ToolbarComponent,
    SidesheetComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FactorCommonModule,
    MatMenuModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule,
    LayoutModule
  ],
  exports: [
    NavbarComponent,
    SearchboxComponent,
    ToolbarComponent,
    SidesheetComponent,
    ListComponent
  ]
})
export class NavigationModule { }
