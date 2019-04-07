import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FactorCommonModule
  ],
  exports: [
    SidenavComponent,
    ToolbarComponent
  ]
})
export class NavigationModule { }
