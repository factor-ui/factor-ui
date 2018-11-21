import { Router } from '@angular/router';
export declare class GoogleAnalyticsService {
    router: Router;
    private environment;
    constructor(router: Router, environment: any);
    appendTrackingCode(): void;
    setEvent(action: string, category?: string, label?: string, value?: number): void;
    setUserId(userId: string): void;
}
