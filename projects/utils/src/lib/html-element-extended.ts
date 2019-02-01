// `.prepend` does not exist in TS DOM types yet, so we add it here
export interface HTMLElementExtended extends HTMLElement {
	prepend(...HTMLElement: any[]): undefined;
}
