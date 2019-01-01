import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { NavigationModule } from 'factor-navigation';
import { Sidenav1Component } from './sidenav1/sidenav1.component';

@NgModule({
  declarations: [Sidenav1Component],
  imports: [
    CommonModule,
    FactorCommonModule.forRoot({ icon: { collection: 'factoricons-regular' } }),
    NavigationModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
