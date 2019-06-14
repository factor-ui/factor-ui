import { Injectable } from '@angular/core';

import { HTMLElementExtended } from './html-element-extended';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerService {
  trackingId: string;

  constructor() { }

  public appendTrackingCode(trackingId: string): void {
    try {
      if (trackingId) {
        this.trackingId = trackingId;
        const s1: HTMLElement = document.createElement('script');
        s1.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${trackingId}');
        `;
        document.head.appendChild(s1);
        const s2: HTMLElement = document.createElement('noscript');
        const s3: HTMLIFrameElement = document.createElement('iframe');
        s3.width = '0';
        s3.height = '0';
        s3.style.display = 'none';
        s3.style.visibility = 'hidden';
        s3.src = `https://www.googletagmanager.com/ns.html?id=${trackingId}`
        s2.appendChild(s3);
        (document.body as HTMLElementExtended).prepend(s2);
      }
    } catch (ex) {
      console.error('Error appending google tag manager');
      console.error(ex);
    }
  }
  public addVariable(variable) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(variable);
  }
}
