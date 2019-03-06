import { Component, Input } from '@angular/core';

import { AbstractControlDirective, AbstractControl } from '@angular/forms';
/**
 * Componente para mostrar mensajes de error en los inputs
 */
@Component({
  selector: 'ft-invalid-feedback',
  templateUrl: './invalid-feedback.component.html',
  styleUrls: ['./invalid-feedback.component.scss']
})
export class InvalidFeedbackComponent {
  /**
   * Catálogo de mensajes según el tipo de error
   */
  private readonly defaultMessages = {
    'required': (params) => 'Is required',
    'min': (params) => 'Should be a valid',
    'max': (params) => 'Should be a valid',
    'minlength': (params) => '##FIELD## should be minimum ' + params.requiredLength + ' characters',
    'maxlength': (params) => '##FIELD## should not be greater then ' + params.requiredLength + ' characters',
    'pattern': (params) => 'Should be a valid',
    'email': (params) => "Should be valid email.",
    'file': (params) => 'File must be valid'
  };
  @Input()
  private messages: any = {};
  /**
   * El input para mostrar el mensaje
   */
  @Input()
  private control: AbstractControlDirective | AbstractControl;
  /**
   * Métoro que devuelve el error según corresponda
   */
  getError(): string {
    let objects = this.control.errors;
    if (objects !== null) {
      var errors = Object.keys(this.control.errors)
        .map(field => this.getMessage(field, this.control.errors[field], this.control));
      return errors[0];
    }
  }
  /**
   * Método que obtiene el mensaje de error
   */
  private getMessage(type: string, params: any, control: any) {
    var fname = this.getControlName(control);
    fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
    fname = fname.replace(/\b\w/g, l => l.toUpperCase())

    var msg = this.messages[type] || this.defaultMessages[type](params) || 'Error';
    return control.dirty || control.touched? msg.replace("##FIELD##", fname) : '';
  }
  /**
   * Obtiene el name del control (input)
   * @param control AbstractControl es el control con sus propiedades
   */
  getControlName(control: AbstractControl): string | null {
    const formGroup = control.parent.controls;
    return Object.keys(formGroup).find(name => control === formGroup[name]) || null;
  }
}
