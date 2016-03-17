System.register(['aurelia-framework'], function (_export) {
    "use strict";

    var customElement, containerless, bindable, UiIcon;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
            containerless = _aureliaFramework.containerless;
            bindable = _aureliaFramework.bindable;
        }],
        execute: function () {
            UiIcon = (function () {
                var _instanceInitializers = {};

                function UiIcon() {
                    _classCallCheck(this, _UiIcon);

                    _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);
                }

                _createDecoratedClass(UiIcon, [{
                    key: 'name',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return "help circle";
                    },
                    enumerable: true
                }, {
                    key: 'size',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'variations',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                var _UiIcon = UiIcon;
                UiIcon = containerless()(UiIcon) || UiIcon;
                UiIcon = customElement('ui-icon')(UiIcon) || UiIcon;
                return UiIcon;
            })();

            _export('UiIcon', UiIcon);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7O2dEQVVBLE1BQU07Ozs7Ozs7Ozs7OENBSlgsYUFBYTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7OztBQUlqQyxrQkFBTTs7O3lCQUFOLE1BQU07Ozs7Ozs7Ozs7c0NBQU4sTUFBTTs7aUNBRWQsUUFBUTs7K0JBQVEsYUFBYTs7Ozs7aUNBQzdCLFFBQVE7Ozs7O2lDQUNSLFFBQVE7Ozs7OzhCQUpBLE1BQU07QUFBTixzQkFBTSxHQURsQixhQUFhLEVBQUUsQ0FDSCxNQUFNLEtBQU4sTUFBTTtBQUFOLHNCQUFNLEdBRmxCLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FFWixNQUFNLEtBQU4sTUFBTTt1QkFBTixNQUFNIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEljb24gLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2ljb24uaHRtbCMvZGVmaW5pdGlvblxuICovXG5cbmltcG9ydCB7Y3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ3VpLWljb24nKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpSWNvbiB7XG5cbiAgICBAYmluZGFibGUgbmFtZSA9IFwiaGVscCBjaXJjbGVcIjtcbiAgICBAYmluZGFibGUgc2l6ZTtcbiAgICBAYmluZGFibGUgdmFyaWF0aW9ucztcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
