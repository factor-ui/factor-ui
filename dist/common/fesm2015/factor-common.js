import { __decorate, __param } from 'tslib';
import { Input, HostBinding, Component, Inject, ElementRef, EventEmitter, Output, Directive, NgModule } from '@angular/core';
import { ColorService } from 'factor-utils';
import { CommonModule as CommonModule$1 } from '@angular/common';

let AvatarComponent = class AvatarComponent {
    constructor(colorService) {
        this.colorService = colorService;
    }
    set src(value) {
        if (value && value.trim() != '') {
            this._src = value;
            let image = new Image();
            image.src = value;
            image.onload = () => {
                if ("decode" in image) {
                    image.decode().then(() => {
                        this.loaded = true;
                    });
                }
                else {
                    console.error('Image.decode not available.');
                }
            };
        }
    }
    set label(value) {
        this._label = value;
        this.initials = this.getInitials(value);
    }
    get backgroundColor() {
        return this.colorService.hex(this._label);
    }
    get backgroundImage() {
        return this._src ? `url(${this._src})` : '';
    }
    ngOnInit() {
    }
    getInitials(value) {
        let allInitials = value.match(/\b\w/g) || [];
        let initials = ((allInitials.shift() || '') + (allInitials.pop() || '')).toUpperCase();
        return initials;
    }
};
AvatarComponent.ctorParameters = () => [
    { type: ColorService }
];
__decorate([
    Input()
], AvatarComponent.prototype, "src", null);
__decorate([
    Input()
], AvatarComponent.prototype, "label", null);
__decorate([
    HostBinding('style.background-color')
], AvatarComponent.prototype, "backgroundColor", null);
__decorate([
    HostBinding('style.background-image')
], AvatarComponent.prototype, "backgroundImage", null);
AvatarComponent = __decorate([
    Component({
        selector: 'ft-avatar',
        template: "<div *ngIf=\"!loaded\">{{ initials }}</div>\n",
        styles: [":host{--default-size:var(--size, 3rem);display:inline-flex;align-items:center;justify-content:center;color:#fff;background-size:cover;background-repeat:no-repeat;border-radius:100vh;padding:.25rem;font-size:calc(var(--default-size) - (var(--default-size) * .5));min-width:var(--default-size);min-height:var(--default-size)}div{font-size:1em;line-height:1em}"]
    })
], AvatarComponent);

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

let ImageComponent = class ImageComponent {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        if ("IntersectionObserver" in window) {
            let elementObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let image = new Image();
                        image.src = this.src;
                        setTimeout(() => {
                            this.loading = true;
                        }, 100);
                        image.onerror = () => {
                            this.error = true;
                            this.loading = false;
                        };
                        image.onload = () => {
                            if ("decode" in image) {
                                image.decode().then(() => {
                                    this.loading = false;
                                    this.shown = true;
                                });
                            }
                            else {
                                console.error('Image.decode not available.');
                            }
                        };
                        elementObserver.unobserve(this.element.nativeElement);
                    }
                });
            }, {
                rootMargin: "0px 0px 200px 0px"
            });
            elementObserver.observe(this.element.nativeElement);
        }
        else {
            console.error('IntersectionObserver not available.');
            this.loading = false;
            this.shown = true;
        }
    }
};
ImageComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    HostBinding('class.ft-image--error')
], ImageComponent.prototype, "error", void 0);
__decorate([
    HostBinding('class.ft-image--loading')
], ImageComponent.prototype, "loading", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "src", void 0);
ImageComponent = __decorate([
    Component({
        selector: 'ft-image',
        template: "<img *ngIf=\"shown\" [src]=\"src\" />\n<ft-icon name=\"warning\" size=\"2\" *ngIf=\"error\"></ft-icon>\n",
        styles: [":host{display:inline-block;overflow:hidden;display:flex;align-items:center;justify-content:center}:host.ft-image--loading{background-color:rgba(0,0,0,.03);position:relative;overflow:hidden}:host.ft-image--loading::after{content:\"\";display:block;background-color:rgba(0,0,0,.02);position:absolute;top:0;bottom:0;width:100%;height:100%;transform:translateX(0);-webkit-animation:1.5s ease-in-out infinite placeholder-loading;animation:1.5s ease-in-out infinite placeholder-loading}:host.ft-image--error{background-color:rgba(255,0,0,.03)}:host.ft-image--error ft-icon{color:var(--danger)}img{position:relative;z-index:1;max-width:100%;max-height:100%;-webkit-animation:.3s fade-in;animation:.3s fade-in}@-webkit-keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@-webkit-keyframes placeholder-loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}@keyframes placeholder-loading{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}"]
    })
], ImageComponent);

let ProgressComponent = class ProgressComponent {
    constructor() {
        this.mode = 'indeterminate';
    }
    ngOnInit() {
        this.color = this.color || 'var(--primary)';
        this.value = 0;
    }
};
__decorate([
    Input()
], ProgressComponent.prototype, "color", void 0);
__decorate([
    Input()
], ProgressComponent.prototype, "mode", void 0);
__decorate([
    Input()
], ProgressComponent.prototype, "size", void 0);
__decorate([
    Input()
], ProgressComponent.prototype, "value", void 0);
ProgressComponent = __decorate([
    Component({
        selector: 'ft-progress',
        template: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <circle class=\"track\" cx=\"50\" cy=\"50\" r=\"40\" />\n  <circle class=\"bar\" [ngClass]=\"mode\" cx=\"50\" cy=\"50\" r=\"40\" [ngStyle]=\"{'stroke': color, 'stroke-dashoffset': mode=='determinate'? 'calc((3.14159265 * 40 * 2 * (100 - '+value+')) / 100)' : null}\"></circle>\n</svg>\n",
        styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle}svg .track{fill:none;stroke-opacity:.08;stroke-width:10;stroke:#000}svg .bar{fill:none;stroke-opacity:.9;stroke-width:6}svg .bar.indeterminate{-webkit-animation:2s linear infinite progress-rotation;animation:2s linear infinite progress-rotation}svg .bar.determinate{stroke-dasharray:calc(2 * 3.1415926536 * 40)}@-webkit-keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}@keyframes progress-rotation{0%{stroke-dashoffset:0;stroke-dasharray:150.6 100.4}50%{stroke-dasharray:1 250}100%{stroke-dashoffset:502;stroke-dasharray:150.6 100.4}}"]
    })
], ProgressComponent);

let ObserveIntersectingDirective = class ObserveIntersectingDirective {
    constructor(element) {
        this.element = element;
        this.event = new EventEmitter();
    }
    ngOnInit() {
        if ("IntersectionObserver" in window) {
            const elementObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    this.event.emit(entry.isIntersecting);
                });
            }, this.options);
            elementObserver.observe(this.element.nativeElement);
        }
        else {
            console.error('ftObserveIntersecting not available in this browser.');
        }
    }
};
ObserveIntersectingDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('ftObserveIntersectingOptions')
], ObserveIntersectingDirective.prototype, "options", void 0);
__decorate([
    Output('ftObserveIntersecting')
], ObserveIntersectingDirective.prototype, "event", void 0);
ObserveIntersectingDirective = __decorate([
    Directive({
        selector: '[ftObserveIntersecting]'
    })
], ObserveIntersectingDirective);

var CommonModule_1;
let CommonModule = CommonModule_1 = class CommonModule {
    static forRoot(configuration) {
        return {
            ngModule: CommonModule_1,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    }
};
CommonModule = CommonModule_1 = __decorate([
    NgModule({
        declarations: [
            AvatarComponent,
            IconComponent,
            ImageComponent,
            ObserveIntersectingDirective,
            ProgressComponent
        ],
        imports: [
            CommonModule$1
        ],
        exports: [
            AvatarComponent,
            IconComponent,
            ImageComponent,
            ObserveIntersectingDirective,
            ProgressComponent
        ]
    })
], CommonModule);

/*
 * Public API Surface of common
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarComponent, CommonModule, IconComponent, ImageComponent, ObserveIntersectingDirective, ProgressComponent };
//# sourceMappingURL=factor-common.js.map
