(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('factor-common', ['exports', '@angular/core'], factory) :
    (factory((global['factor-common'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

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
                if (this.collection) {
                    this.libraryUrl = "assets/" + this.collection + ".svg";
                }
                else if (this.configuration.icon && this.configuration.icon.collection) {
                    this.libraryUrl = "assets/" + this.configuration.icon.collection + ".svg";
                }
                else {
                    this.libraryUrl = 'assets/icons.svg';
                }
            };
        IconComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ft-icon',
                        template: "<svg><use attr.xlink:href=\"{{ libraryUrl }}#{{ name }}\" /></svg>\n",
                        styles: [":host{line-height:0;display:inline-block}svg{width:1em;height:1em;vertical-align:middle;fill:none}"]
                    }] }
        ];
        /** @nocollapse */
        IconComponent.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: ['FactorCommonConfiguration',] }] }
            ];
        };
        IconComponent.propDecorators = {
            name: [{ type: core.Input }],
            collection: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
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

    exports.IconComponent = IconComponent;
    exports.CommonModule = CommonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-common.umd.js.map