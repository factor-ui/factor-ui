import { __decorate, __param } from "tslib";
import { Component, Input, Inject } from '@angular/core';
var IconComponent = /** @class */ (function () {
    function IconComponent(configuration) {
        this.configuration = configuration;
    }
    IconComponent.prototype.ngOnInit = function () {
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
    };
    IconComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
    ]; };
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
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRTtJQVVFLHVCQUMrQyxhQUFhO1FBQWIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDeEQsQ0FBQztJQUVMLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7YUFDM0I7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzFDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDOztnREFsQkUsTUFBTSxTQUFDLDJCQUEyQjs7SUFUckM7UUFEQyxLQUFLLEVBQUU7K0NBQ0s7SUFFYjtRQURDLEtBQUssRUFBRTtxREFDVztJQUVuQjtRQURDLEtBQUssRUFBRTsrQ0FDSztJQUViO1FBREMsS0FBSyxFQUFFOytDQUNLO0lBUkYsYUFBYTtRQUx6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiw2S0FBb0M7O1NBRXJDLENBQUM7UUFZRyxXQUFBLE1BQU0sQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO09BWDNCLGFBQWEsQ0E4QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZnQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGNvbGxlY3Rpb246IHN0cmluZztcbiAgQElucHV0KClcbiAgcGF0aDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzaXplOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdCgnRmFjdG9yQ29tbW9uQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5jb2xsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLmljb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmljb24uY29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5jb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gJ2ljb25zJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhdGgpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uaWNvbi5wYXRoKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMuY29uZmlndXJhdGlvbi5pY29uLnBhdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBhdGggPSAnYXNzZXRzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==