import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MessageComponent } from './message/message.component';
import { CommonModule as FactorCommonModule } from 'factor-common';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    AngularCommonModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    FactorCommonModule.forRoot({ icon: { path: '', collection: '' } })
  ],
  exports: [
    MessageComponent
  ],
  entryComponents: [
    MessageComponent
  ]
})
export class DialogsModule { }
