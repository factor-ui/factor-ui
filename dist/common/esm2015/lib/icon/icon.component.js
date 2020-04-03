import { __decorate, __param } from "tslib";
import { Component, Input, Inject } from '@angular/core';
let IconComponent = class IconComponent {
    constructor(configuration) {
        this.configuration = configuration;
    }
    ngOnInit() {
        if (!this.collection) {
            if (this.configuration.icon && this.configuration.icon.collection) {
                this.collection = this.configuration.icon.collection;
            }
            else {
                this.collection = 'icons';
            }
        }
        if (!this.path) {
            if (this.configuration.icon && this.configuration.icon.path) {
                this.path = this.configuration.icon.path;
            }
            else {
                this.path = 'assets';
            }
        }
    }
};
IconComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
];
__decorate([
    Input()
], IconComponent.prototype, "name", void 0);
__decorate([
    Input()
], IconComponent.prototype, "collection", void 0);
__decorate([
    Input()
], IconComponent.prototype, "path", void 0);
__decorate([
    Input()
], IconComponent.prototype, "size", void 0);
IconComponent = __decorate([
    Component({
        selector: 'ft-icon',
        template: " <svg><use attr.xlink:href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" attr.href=\"{{ this.path }}/{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
        styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
    }),
    __param(0, Inject('FactorCommonConfiguration'))
], IconComponent);
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBVXhCLFlBQytDLGFBQWE7UUFBYixrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUN4RCxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQzthQUMzQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBOzs0Q0FuQkksTUFBTSxTQUFDLDJCQUEyQjs7QUFUckM7SUFEQyxLQUFLLEVBQUU7MkNBQ0s7QUFFYjtJQURDLEtBQUssRUFBRTtpREFDVztBQUVuQjtJQURDLEtBQUssRUFBRTsyQ0FDSztBQUViO0lBREMsS0FBSyxFQUFFOzJDQUNLO0FBUkYsYUFBYTtJQUx6QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQiw2S0FBb0M7O0tBRXJDLENBQUM7SUFZRyxXQUFBLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO0dBWDNCLGFBQWEsQ0E4QnpCO1NBOUJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgY29sbGVjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwYXRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHNpemU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KCdGYWN0b3JDb21tb25Db25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbGxlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5jb2xsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IHRoaXMuY29uZmlndXJhdGlvbi5pY29uLmNvbGxlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSAnaWNvbnMnO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMucGF0aCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5pY29uICYmIHRoaXMuY29uZmlndXJhdGlvbi5pY29uLnBhdGgpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gdGhpcy5jb25maWd1cmF0aW9uLmljb24ucGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICdhc3NldHMnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19