import { Component, OnInit } from '@angular/core';

import { MessageService } from 'factor-dialogs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  code = `import { MessageService } from 'factor-dialogs';

constructor(
  private messageService: MessageService
) { }

show() {
  const responseObservable: Observable<any> = this.messageService.show(
    'Notificaciones pueden incluir alertas, sonidos e insignia en el ícono.',
    {
      title: 'Tareas quiere enviarte notificaciones',
      type:'modal',
      width: '350px',
      actions: [
        {
          label: 'No permitir',
          value: 1
        },
        {
          label: 'Permitir',
          value: 2,
          type: 'stroked',
          metadata: {
            color: 'primary'
          }
        }
      ]
    }
  );

  responseObservable.subscribe((value) => {
    if (value === 1) {
      //TODO: Ejecutar algún código
    }
  })
}`;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
  show(message, options) {
    this.messageService.show(message, options);
  }

}
