import { Component, Input, Inject, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconComponent = /** @class */ (function () {
    function IconComponent(configuration) {
        this.configuration = configuration;
    }
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.collection) {
            if (this.configuration.icon && this.configuration.icon.collection) {
                this.collection = this.configuration.icon.collection;
            }
            else {
                this.collection = 'icons';
            }
        }
        if (!this.path) {
            this.path = 'assets/';
        }
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ft-icon',
                    template: "<svg><use attr.xlink:href=\"{{ this.path }}{{ this.collection }}.svg#{{ name }}\" /></svg>\n",
                    styles: [":host{line-height:0;display:inline-block}:host[size=\"1\"]{font-size:1rem}:host[size=\"2\"]{font-size:1.5rem}:host[size=\"3\"]{font-size:2rem}:host[size=\"4\"]{font-size:3rem}:host[size=\"5\"]{font-size:4.5rem}:host[size=\"6\"]{font-size:8rem}:host[size=\"7\"]{font-size:16rem}:host[size=\"8\"]{font-size:32rem}svg{width:1em;height:1em;vertical-align:middle;fill:currentColor}"]
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['FactorCommonConfiguration',] }] }
    ]; };
    IconComponent.propDecorators = {
        name: [{ type: Input }],
        collection: [{ type: Input }],
        path: [{ type: Input }]
    };
    return IconComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    CommonModule.forRoot = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: CommonModule,
            providers: [
                { provide: 'FactorCommonConfiguration', useValue: configuration }
            ]
        };
    };
    CommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        IconComponent
                    ],
                    imports: [],
                    exports: [
                        IconComponent
                    ]
                },] }
    ];
    return CommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IconComponent, CommonModule };

//# sourceMappingURL=factor-common.js.map