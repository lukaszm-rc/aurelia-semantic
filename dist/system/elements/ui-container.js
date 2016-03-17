System.register(['aurelia-framework'], function (_export) {
    "use strict";

    var customElement, containerless, bindable, UiContainer;

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
            UiContainer = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(UiContainer, [{
                    key: 'type',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'variations',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function UiContainer() {
                    _classCallCheck(this, _UiContainer);

                    _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);

                    this.types = ["text", "fluid ", "left aligned", "right aligned", "justified"];
                }

                _createDecoratedClass(UiContainer, [{
                    key: 'attached',
                    value: function attached() {}
                }], null, _instanceInitializers);

                var _UiContainer = UiContainer;
                UiContainer = containerless()(UiContainer) || UiContainer;
                UiContainer = customElement('ui-container')(UiContainer) || UiContainer;
                return UiContainer;
            })();

            _export('UiContainer', UiContainer);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0JBQVksQ0FBQzs7Z0RBT0EsV0FBVzs7Ozs7Ozs7Ozs4Q0FMaEIsYUFBYTs4Q0FBRSxhQUFhO3lDQUFFLFFBQVE7OztBQUtqQyx1QkFBVzs7OztzQ0FBWCxXQUFXOztpQ0FDbkIsUUFBUTs7Ozs7aUNBQ1IsUUFBUTs7Ozs7QUFHRSx5QkFMRixXQUFXLEdBS047Ozs7Ozs7eUJBRmQsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQztpQkFHdkU7O3NDQU5RLFdBQVc7OzJCQVFaLG9CQUFHLEVBQ1Y7OzttQ0FUUSxXQUFXO0FBQVgsMkJBQVcsR0FEdkIsYUFBYSxFQUFFLENBQ0gsV0FBVyxLQUFYLFdBQVc7QUFBWCwyQkFBVyxHQUZ2QixhQUFhLENBQUMsY0FBYyxDQUFDLENBRWpCLFdBQVcsS0FBWCxXQUFXO3VCQUFYLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Y3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AY3VzdG9tRWxlbWVudCgndWktY29udGFpbmVyJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaUNvbnRhaW5lciB7XG4gICAgQGJpbmRhYmxlIHR5cGU7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnM7XG4gICAgdHlwZXMgPSBbXCJ0ZXh0XCIsIFwiZmx1aWQgXCIsIFwibGVmdCBhbGlnbmVkXCIsIFwicmlnaHQgYWxpZ25lZFwiLCBcImp1c3RpZmllZFwiXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
