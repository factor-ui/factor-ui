import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CommonModule as FactorCommonModule } from 'factor-common';
import { ViewerComponent } from './viewer/viewer.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    ViewerComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    DragDropModule,
    FactorCommonModule
  ],
  exports: [
    ViewerComponent,
    EditorComponent
  ]
})
export class DesignerModule { }
