import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from "rxjs";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { MessageComponent } from './message/message.component';
import { Content } from './models/content';
import { ContentComponent } from './content/content.component';

export interface Action {
  label: string;
  value: any;
  color?: string;
  type?: string;
  metadata?: any;
}
export interface Icon {
  name: string;
  collection?: string;
  class?: string;
  size?: number;
}
export interface Options {
  type?: 'modal' | 'notification';
  actions?: Action[];
  actionsVisible?: boolean;
  duration?: number;
  title?: string;
  titleIcon?: string;
  icon?: Icon;
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

  show(message: string | Content, options?: Options): Observable<any> {
    let selectionSource: ReplaySubject<string> = new ReplaySubject<string>(null);
    let selection: Observable<string> = selectionSource.asObservable();
    const defaults: Options = {
      type: 'notification',
      duration: 2000,
      actionsVisible: true
    };
    options = Object.assign(defaults, options);
    const data = { message: typeof message === 'string' ? { content: message, type: 'text' } : message, options };
    switch (options.type) {
      default:
      case 'notification':
        this.snackBar.openFromComponent(ContentComponent, {
          data,
          duration: options.duration || 2000,
        });
        break;
      case 'modal':
        const dialogRef = this.dialog.open(MessageComponent, {
          width: options.width || '350px',
          data,
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
