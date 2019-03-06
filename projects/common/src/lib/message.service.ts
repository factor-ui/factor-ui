import { Injectable } from '@angular/core';

declare var $: any;

export interface Options {
  type?: string,
  actions?: any[]
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  element: any;

  constructor() { }

  show(content, options?: Options) {
    if (this.element) {

    }
    this.element = document.createElement('div');
    switch (options.type) {
      case 'toast':
        this.element.classList.add('toast', 'fade');
        this.element.style = 'position: fixed; bottom: 2rem; left: 2rem; right: 2rem; margin: auto;';
        this.element.innerHTML = `
            <div class="toast-body">${content}</div>
          `;
        document.body.appendChild(this.element);
        $(this.element).toast('show');
        break;
      default:
        this.element.classList.add('modal', 'fade');
        this.element.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">${content}</div>
                <div class="modal-footer" style="padding-top: 0; border: 0;">
                  <button type="button" class="btn btn-primary" data-dismiss="modal">Accept</button>
                </div>
              </div>
            </div>
          `;
        document.body.appendChild(this.element);
        $(this.element).modal();
        break;
    }
  }
}
