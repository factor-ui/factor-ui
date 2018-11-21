/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
export class GoogleAnalyticsService {
    /**
     * @param {?} router
     * @param {?} environment
     */
    constructor(router, environment) {
        this.router = router;
        this.environment = environment;
        router.events.subscribe(event => {
            try {
                if (typeof gtag === 'function') {
                    if (event instanceof NavigationEnd) {
                        setTimeout(() => {
                            gtag('config', this.environment.googleAnalytics.trackingId, {
                                'page_title': document.title,
                                'page_path': event.urlAfterRedirects
                            });
                        }, 100);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * @return {?}
     */
    appendTrackingCode() {
        try {
            if (this.environment.googleAnalytics && this.environment.googleAnalytics.trackingId) {
                /** @type {?} */
                const s1 = document.createElement('script');
                s1.async = true;
                s1.src = `https://www.googletagmanager.com/gtag/js?id=${this.environment.googleAnalytics.trackingId}`;
                document.head.appendChild(s1);
                /** @type {?} */
                const s2 = document.createElement('script');
                s2.innerHTML = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${this.environment.googleAnalytics.trackingId}');
       `;
                document.head.appendChild(s2);
            }
        }
        catch (ex) {
            console.error('Error appending google analytics');
            console.error(ex);
        }
    }
    /**
     * @param {?} action
     * @param {?=} category
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    setEvent(action, category = null, label = null, value = null) {
        if (typeof gtag === 'function') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUserId(userId) {
        if (typeof gtag === 'function') {
            gtag('set', { 'user_id': userId });
        }
    }
}
GoogleAnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleAnalyticsService.ctorParameters = () => [
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['environment',] }] }
];
if (false) {
    /** @type {?} */
    GoogleAnalyticsService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GoogleAnalyticsService.prototype.environment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGUtYW5hbHl0aWNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLeEQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFDUyxNQUFjLEVBQ1UsV0FBVztRQURuQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ1UsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFFMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSTtnQkFDRixJQUFJLE9BQU8sSUFBSSxLQUFLLFVBQVUsRUFBRTtvQkFDOUIsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO3dCQUNsQyxVQUFVLENBQUMsR0FBRSxFQUFFOzRCQUNiLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFO2dDQUMxRCxZQUFZLEVBQUUsUUFBUSxDQUFDLEtBQUs7Z0NBQzVCLFdBQVcsRUFBRSxLQUFLLENBQUMsaUJBQWlCOzZCQUNyQyxDQUFDLENBQUM7d0JBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUNUO2lCQUNGO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTs7c0JBQzdFLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsK0NBQStDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN0RyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7c0JBQ3hCLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLFNBQVMsR0FBRzs7OzsyQkFJSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVO1FBQzlELENBQUM7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDL0I7U0FDRjtRQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1gsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7Ozs7OztJQUNNLFFBQVEsQ0FBQyxNQUFjLEVBQUUsV0FBbUIsSUFBSSxFQUFFLFFBQWdCLElBQUksRUFBRSxRQUFnQixJQUFJO1FBQ2pHLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO2dCQUNwQixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUNNLFNBQVMsQ0FBQyxNQUFjO1FBQzdCLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7OztZQXpERixVQUFVOzs7O1lBSmEsTUFBTTs0Q0FRekIsTUFBTSxTQUFDLGFBQWE7Ozs7SUFEckIsd0NBQXFCOzs7OztJQUNyQiw2Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIGd0YWc6IEZ1bmN0aW9uO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnRcbiAgKSB7XG4gICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBndGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICBndGFnKCdjb25maWcnLCB0aGlzLmVudmlyb25tZW50Lmdvb2dsZUFuYWx5dGljcy50cmFja2luZ0lkLCB7XG4gICAgICAgICAgICAgICAgJ3BhZ2VfdGl0bGUnOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgICAgICAgICAncGFnZV9wYXRoJzogZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYXBwZW5kVHJhY2tpbmdDb2RlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MgJiYgdGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZCkge1xuICAgICAgICBjb25zdCBzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzMS5hc3luYyA9IHRydWU7XG4gICAgICAgIHMxLnNyYyA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7dGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZH1gO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMxKTtcbiAgICAgICAgY29uc3QgczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgczIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7dGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZH0nKTtcbiAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXBwZW5kaW5nIGdvb2dsZSBhbmFseXRpY3MnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0RXZlbnQoYWN0aW9uOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGd0YWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBndGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBndGFnKCdzZXQnLCB7ICd1c2VyX2lkJzogdXNlcklkIH0pO1xuICAgIH1cbiAgfVxufVxuIl19