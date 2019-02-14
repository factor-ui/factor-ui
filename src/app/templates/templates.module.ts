import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { WorkflowTaskComponent } from './workflow-task/workflow-task.component';
import { SearchComponent } from './search/search.component';
import { WizardComponent } from './wizard/wizard.component';

@NgModule({
  declarations: [WorkflowTaskComponent, SearchComponent, WizardComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
