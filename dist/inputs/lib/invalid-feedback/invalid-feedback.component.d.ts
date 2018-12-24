import { AbstractControl } from '@angular/forms';
/**
 * Componente para mostrar mensajes de error en los inputs
 */
export declare class InvalidFeedbackComponent {
    /**
     * Catálogo de mensajes según el tipo de error
     */
    private readonly defaultMessages;
    private messages;
    /**
     * El input para mostrar el mensaje
     */
    private control;
    /**
     * Métoro que devuelve el error según corresponda
     */
    getError(): string;
    /**
     * Método que obtiene el mensaje de error
     */
    private getMessage;
    /**
     * Obtiene el name del control (input)
     * @param control AbstractControl es el control con sus propiedades
     */
    getControlName(control: AbstractControl): string | null;
}
