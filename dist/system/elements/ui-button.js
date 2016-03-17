System.register(['aurelia-framework', 'jquery'], function (_export) {
    "use strict";

    var inject, customElement, containerless, bindable, $, interceptMethods, UiButton;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
            containerless = _aureliaFramework.containerless;
            bindable = _aureliaFramework.bindable;
        }, function (_jquery) {
            $ = _jquery['default'];
        }],
        execute: function () {
            interceptMethods = ['updateTarget', 'updateSource', 'callSource'];

            UiButton = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(UiButton, [{
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
                }, {
                    key: 'icon',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'state',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'variations',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'preset',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'click',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function UiButton() {
                    _classCallCheck(this, _UiButton);

                    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'state', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'preset', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'click', _instanceInitializers);

                    this.click = this.defaultClick;
                }

                _createDecoratedClass(UiButton, [{
                    key: 'defaultClick',
                    value: function defaultClick(event) {
                        console.log("defaultClick");
                    }
                }], null, _instanceInitializers);

                var _UiButton = UiButton;
                UiButton = containerless()(UiButton) || UiButton;
                UiButton = customElement('ui-button')(UiButton) || UiButton;
                return UiButton;
            })();

            _export('UiButton', UiButton);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0JBQVksQ0FBQzs7MkRBU1AsZ0JBQWdCLEVBR1QsUUFBUTs7Ozs7Ozs7Ozt1Q0FOYixNQUFNOzhDQUFFLGFBQWE7OENBQUMsYUFBYTt5Q0FBRSxRQUFROzs7OztBQUcvQyw0QkFBZ0IsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDOztBQUcxRCxvQkFBUTs7OztzQ0FBUixRQUFROztpQ0FDaEIsUUFBUTs7K0JBQVEsSUFBSTs7Ozs7aUNBQ3BCLFFBQVE7OytCQUFRLElBQUk7Ozs7O2lDQUNwQixRQUFROzsrQkFBUSxJQUFJOzs7OztpQ0FDcEIsUUFBUTs7K0JBQVMsSUFBSTs7Ozs7aUNBQ3JCLFFBQVE7OytCQUFjLElBQUk7Ozs7O2lDQUMxQixRQUFROzsrQkFBVSxJQUFJOzs7OztpQ0FDdEIsUUFBUTs7Ozs7QUFDRSx5QkFSRixRQUFRLEdBUUg7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1Ysd0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFFbEM7O3NDQVhRLFFBQVE7OzJCQVlMLHNCQUFDLEtBQUssRUFBRTtBQUNoQiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDL0I7OztnQ0FkUSxRQUFRO0FBQVIsd0JBQVEsR0FEcEIsYUFBYSxFQUFFLENBQ0gsUUFBUSxLQUFSLFFBQVE7QUFBUix3QkFBUSxHQUZwQixhQUFhLENBQUMsV0FBVyxDQUFDLENBRWQsUUFBUSxLQUFSLFFBQVE7dUJBQVIsUUFBUSIsImZpbGUiOiJlbGVtZW50cy91aS1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvbnRlbnQgSGVhZGVyIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9oZWFkZXIuaHRtbCNjb250ZW50LWhlYWRlcnNcbiAqL1xuXG5pbXBvcnQge2luamVjdCwgY3VzdG9tRWxlbWVudCxjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgaW50ZXJjZXB0TWV0aG9kcyA9IFsndXBkYXRlVGFyZ2V0JywgJ3VwZGF0ZVNvdXJjZScsICdjYWxsU291cmNlJ107XG5AY3VzdG9tRWxlbWVudCgndWktYnV0dG9uJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaUJ1dHRvbiB7XG4gICAgQGJpbmRhYmxlIHR5cGUgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzaXplID0gbnVsbDtcbiAgICBAYmluZGFibGUgaWNvbiA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHN0YXRlID0gbnVsbDtcbiAgICBAYmluZGFibGUgdmFyaWF0aW9ucyA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHByZXNldCA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGNsaWNrO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsaWNrID0gdGhpcy5kZWZhdWx0Q2xpY2s7XG5cbiAgICB9XG4gICAgZGVmYXVsdENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdENsaWNrXCIpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
