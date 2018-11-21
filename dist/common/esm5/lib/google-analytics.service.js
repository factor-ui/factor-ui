/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
var GoogleAnalyticsService = /** @class */ (function () {
    function GoogleAnalyticsService(router, environment) {
        var _this = this;
        this.router = router;
        this.environment = environment;
        router.events.subscribe(function (event) {
            try {
                if (typeof gtag === 'function') {
                    if (event instanceof NavigationEnd) {
                        setTimeout(function () {
                            gtag('config', _this.environment.googleAnalytics.trackingId, {
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
    GoogleAnalyticsService.prototype.appendTrackingCode = /**
     * @return {?}
     */
    function () {
        try {
            if (this.environment.googleAnalytics && this.environment.googleAnalytics.trackingId) {
                /** @type {?} */
                var s1 = document.createElement('script');
                s1.async = true;
                s1.src = "https://www.googletagmanager.com/gtag/js?id=" + this.environment.googleAnalytics.trackingId;
                document.head.appendChild(s1);
                /** @type {?} */
                var s2 = document.createElement('script');
                s2.innerHTML = "\n         window.dataLayer = window.dataLayer || [];\n         function gtag(){dataLayer.push(arguments);}\n         gtag('js', new Date());\n         gtag('config', '" + this.environment.googleAnalytics.trackingId + "');\n       ";
                document.head.appendChild(s2);
            }
        }
        catch (ex) {
            console.error('Error appending google analytics');
            console.error(ex);
        }
    };
    /**
     * @param {?} action
     * @param {?=} category
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    GoogleAnalyticsService.prototype.setEvent = /**
     * @param {?} action
     * @param {?=} category
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    function (action, category, label, value) {
        if (category === void 0) { category = null; }
        if (label === void 0) { label = null; }
        if (value === void 0) { value = null; }
        if (typeof gtag === 'function') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    GoogleAnalyticsService.prototype.setUserId = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        if (typeof gtag === 'function') {
            gtag('set', { 'user_id': userId });
        }
    };
    GoogleAnalyticsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAnalyticsService.ctorParameters = function () { return [
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: ['environment',] }] }
    ]; };
    return GoogleAnalyticsService;
}());
export { GoogleAnalyticsService };
if (false) {
    /** @type {?} */
    GoogleAnalyticsService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    GoogleAnalyticsService.prototype.environment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9nb29nbGUtYW5hbHl0aWNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJeEQ7SUFFRSxnQ0FDUyxNQUFjLEVBQ1UsV0FBVztRQUY1QyxpQkFvQkM7UUFuQlEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNVLGdCQUFXLEdBQVgsV0FBVyxDQUFBO1FBRTFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUMzQixJQUFJO2dCQUNGLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO29CQUM5QixJQUFJLEtBQUssWUFBWSxhQUFhLEVBQUU7d0JBQ2xDLFVBQVUsQ0FBQzs0QkFDVCxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTtnQ0FDMUQsWUFBWSxFQUFFLFFBQVEsQ0FBQyxLQUFLO2dDQUM1QixXQUFXLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjs2QkFDckMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztxQkFDVDtpQkFDRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUNNLG1EQUFrQjs7O0lBQXpCO1FBQ0UsSUFBSTtZQUNGLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFOztvQkFDN0UsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUMzQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDaEIsRUFBRSxDQUFDLEdBQUcsR0FBRyxpREFBK0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsVUFBWSxDQUFDO2dCQUN0RyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7b0JBQ3hCLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztnQkFDM0MsRUFBRSxDQUFDLFNBQVMsR0FBRyw2S0FJSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxVQUFVLGlCQUM5RCxDQUFDO2dCQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7UUFBQyxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFDTSx5Q0FBUTs7Ozs7OztJQUFmLFVBQWdCLE1BQWMsRUFBRSxRQUF1QixFQUFFLEtBQW9CLEVBQUUsS0FBb0I7UUFBbkUseUJBQUEsRUFBQSxlQUF1QjtRQUFFLHNCQUFBLEVBQUEsWUFBb0I7UUFBRSxzQkFBQSxFQUFBLFlBQW9CO1FBQ2pHLElBQUksT0FBTyxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO2dCQUNwQixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsV0FBVyxFQUFFLEtBQUs7Z0JBQ2xCLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUNNLDBDQUFTOzs7O0lBQWhCLFVBQWlCLE1BQWM7UUFDN0IsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Z0JBekRGLFVBQVU7Ozs7Z0JBSmEsTUFBTTtnREFRekIsTUFBTSxTQUFDLGFBQWE7O0lBc0R6Qiw2QkFBQztDQUFBLEFBMURELElBMERDO1NBekRZLHNCQUFzQjs7O0lBRS9CLHdDQUFxQjs7Ozs7SUFDckIsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBndGFnOiBGdW5jdGlvbjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50XG4gICkge1xuICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ3RhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgdGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZCwge1xuICAgICAgICAgICAgICAgICdwYWdlX3RpdGxlJzogZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgJ3BhZ2VfcGF0aCc6IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGFwcGVuZFRyYWNraW5nQ29kZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzICYmIHRoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzLnRyYWNraW5nSWQpIHtcbiAgICAgICAgY29uc3QgczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgczEuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzMS5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke3RoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzLnRyYWNraW5nSWR9YDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzMSk7XG4gICAgICAgIGNvbnN0IHMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHMyLmlubmVySFRNTCA9IGBcbiAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3RoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzLnRyYWNraW5nSWR9Jyk7XG4gICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzMik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFwcGVuZGluZyBnb29nbGUgYW5hbHl0aWNzJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldEV2ZW50KGFjdGlvbjogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nID0gbnVsbCwgbGFiZWw6IHN0cmluZyA9IG51bGwsIHZhbHVlOiBudW1iZXIgPSBudWxsKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBndGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgICAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgZ3RhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZ3RhZygnc2V0JywgeyAndXNlcl9pZCc6IHVzZXJJZCB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==