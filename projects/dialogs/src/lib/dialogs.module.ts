import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MessageComponent } from './message/message.component';
import { CommonModule as FactorCommonModule } from 'factor-common';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    MessageComponent,
    ContentComponent
  ],
  imports: [
    AngularCommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    FactorCommonModule.forRoot({ icon: { path: '', collection: '' } })
  ]
})
export class DialogsModule { }
