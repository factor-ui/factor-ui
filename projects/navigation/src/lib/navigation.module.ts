import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    SidenavComponent,
    StepperComponent,
    ContentComponent
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
