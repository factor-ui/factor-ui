import { Injectable, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var gtag: Function;

@Injectable()
export class GoogleAnalyticsService {
  constructor(
    public router: Router,
    @Inject('environment') private environment
  ) {
    router.events.subscribe(event => {
      try {
        if (typeof gtag === 'function') {
          if (event instanceof NavigationEnd) {
            setTimeout(()=>{
              gtag('config', this.environment.googleAnalytics.trackingId, {
                'page_title': document.title,
                'page_path': event.urlAfterRedirects
              });
            }, 100);
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
  public appendTrackingCode(): void {
    try {
      if (this.environment.googleAnalytics && this.environment.googleAnalytics.trackingId) {
        const s1 = document.createElement('script');
        s1.async = true;
        s1.src = `https://www.googletagmanager.com/gtag/js?id=${this.environment.googleAnalytics.trackingId}`;
        document.head.appendChild(s1);
        const s2 = document.createElement('script');
        s2.innerHTML = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${this.environment.googleAnalytics.trackingId}');
       `;
        document.head.appendChild(s2);
      }
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }
  public setEvent(action: string, category: string = null, label: string = null, value: number = null): void {
    if (typeof gtag === 'function') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  }
  public setUserId(userId: string): void {
    if (typeof gtag === 'function') {
      gtag('set', { 'user_id': userId });
    }
  }
}
