import { Injectable, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  constructor(
    public router: Router,
    @Inject('FactorUtilsConfiguration') private configuration
  ) {
    router.events.subscribe(event => {
      try {
        if (typeof gtag === 'function') {
          if (event instanceof NavigationEnd) {
            setTimeout(() => {
              gtag('config', this.configuration.gaTrackingId, {
                'page_title': document.title,
                'page_path': event.urlAfterRedirects
              });
            }, 100);
          }
        }
      } catch (e) {
        console.error(e);
      }
    });
  }
  public appendTrackingCode() {
    try {
      if (this.configuration && this.configuration.gaTrackingId) {
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${this.configuration.gaTrackingId}`;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.innerHTML = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${this.configuration.gaTrackingId}');
       `;
        document.head.appendChild(s2);
      }
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }
  public trackEvent(action: string, category: string = null, label: string = null, value: number = null) {
    if (typeof gtag === 'function') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }
  public trackException(description: string, fatal: boolean) {
    if (typeof gtag === 'function') {
      gtag('event', 'exception', {
        description: description,
        fatal: fatal
      });
    }
  }
  public setUserId(userId: string) {
    if (typeof gtag === 'function') {
      gtag('set', { 'user_id': userId });
    }
  }
}
