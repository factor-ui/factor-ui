import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { MessageComponent } from './message/message.component';

export interface Action {
  label: string;
  value: any;
  color?: string;
  type?: string;
  metadata?: any;
}
export interface Options {
  type?: 'modal' | 'notification';
  actions?: Action[];
  duration?: number;
  title?: string;
  width?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  element: any;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  show(message: string, options?: Options): Observable<any> {
    let selectionSource: ReplaySubject<string> = new ReplaySubject<string>(null);
    let selection: Observable<string> = selectionSource.asObservable();
    const defaults: any = {
      type: null,
      duration: 2000
    };
    options = Object.assign(defaults, options);
    switch (options.type) {
      default:
      case 'notification':
        this.snackBar.open(message, '', {
          duration: options.duration || 2000,
        });
        break;
      case 'modal':
        const dialogRef = this.dialog.open(MessageComponent, {
          width: options.width || '350px',
          data: { message, options },
          autoFocus: false,
          disableClose: true
        });
        dialogRef.componentInstance.beforeSelect.subscribe(response => {
          selectionSource.next(response);
          dialogRef.close();
        });
        this.snackBar.dismiss();
        break;
    }
    return selection;
  }
}
