import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    SidenavComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    FactorCommonModule
  ],
  exports: [
    SidenavComponent,
    StepperComponent
  ]
})
export class NavigationModule { }
