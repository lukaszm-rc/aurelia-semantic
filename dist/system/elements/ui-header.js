System.register(['aurelia-framework', 'jquery'], function (_export) {
    "use strict";

    var inject, customElement, bindable, containerless, $, UiHeader;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            bindable = _aureliaFramework.bindable;
            containerless = _aureliaFramework.containerless;
        }, function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            UiHeader = (function () {
                var _instanceInitializers = {};

                function UiHeader() {
                    _classCallCheck(this, _UiHeader);

                    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

                    this.sizes = ["huge", "large", "medium", "small", "tiny"];
                }

                _createDecoratedClass(UiHeader, [{
                    key: 'type',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'size',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                var _UiHeader = UiHeader;
                UiHeader = containerless()(UiHeader) || UiHeader;
                UiHeader = customElement('ui-header')(UiHeader) || UiHeader;
                return UiHeader;
            })();

            _export('UiHeader', UiHeader);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0JBQVksQ0FBQzs7MkRBV0EsUUFBUTs7Ozs7Ozs7Ozt1Q0FMYixNQUFNOzhDQUFFLGFBQWE7eUNBQUUsUUFBUTs4Q0FBRSxhQUFhOzs7OztBQUt6QyxvQkFBUTs7O3lCQUFSLFFBQVE7Ozs7Ozs7eUJBSWpCLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUM7OztzQ0FKM0MsUUFBUTs7aUNBRWhCLFFBQVE7OytCQUFRLElBQUk7Ozs7O2lDQUNwQixRQUFROzsrQkFBUSxJQUFJOzs7OztnQ0FIWixRQUFRO0FBQVIsd0JBQVEsR0FEcEIsYUFBYSxFQUFFLENBQ0gsUUFBUSxLQUFSLFFBQVE7QUFBUix3QkFBUSxHQUZwQixhQUFhLENBQUMsV0FBVyxDQUFDLENBRWQsUUFBUSxLQUFSLFFBQVE7dUJBQVIsUUFBUSIsImZpbGUiOiJlbGVtZW50cy91aS1oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvbnRlbnQgSGVhZGVyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9oZWFkZXIuaHRtbCNjb250ZW50LWhlYWRlcnNcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGNvbnRhaW5lcmxlc3N9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbkBjdXN0b21FbGVtZW50KCd1aS1oZWFkZXInKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpSGVhZGVyIHtcblxuICAgIEBiaW5kYWJsZSB0eXBlID0gbnVsbDtcbiAgICBAYmluZGFibGUgc2l6ZSA9IG51bGw7XG4gICAgc2l6ZXMgPSBbXCJodWdlXCIsIFwibGFyZ2VcIiwgXCJtZWRpdW1cIiwgXCJzbWFsbFwiLCBcInRpbnlcIl07XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
