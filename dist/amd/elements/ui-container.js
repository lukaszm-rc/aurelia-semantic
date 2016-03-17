define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var UiContainer = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(UiContainer, [{
            key: 'type',
            decorators: [_aureliaFramework.bindable],
            initializer: null,
            enumerable: true
        }, {
            key: 'variations',
            decorators: [_aureliaFramework.bindable],
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
        UiContainer = (0, _aureliaFramework.containerless)()(UiContainer) || UiContainer;
        UiContainer = (0, _aureliaFramework.customElement)('ui-container')(UiContainer) || UiContainer;
        return UiContainer;
    })();

    exports.UiContainer = UiContainer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0JBQVksQ0FBQzs7Ozs7Ozs7Ozs7O1FBT0EsV0FBVzs7Ozs4QkFBWCxXQUFXOzsyQ0FMYyxRQUFROzs7OzsyQ0FBUixRQUFROzs7OztBQVUvQixpQkFMRixXQUFXLEdBS047Ozs7Ozs7aUJBRmQsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQztTQUd2RTs7OEJBTlEsV0FBVzs7bUJBUVosb0JBQUcsRUFDVjs7OzJCQVRRLFdBQVc7QUFBWCxtQkFBVyxHQUR2QixzQkFKc0IsYUFBYSxHQUlwQixDQUNILFdBQVcsS0FBWCxXQUFXO0FBQVgsbUJBQVcsR0FGdkIsc0JBSE8sYUFBYSxFQUdOLGNBQWMsQ0FBQyxDQUVqQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdWktY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Y3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuXG5AY3VzdG9tRWxlbWVudCgndWktY29udGFpbmVyJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaUNvbnRhaW5lciB7XG4gICAgQGJpbmRhYmxlIHR5cGU7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnM7XG4gICAgdHlwZXMgPSBbXCJ0ZXh0XCIsIFwiZmx1aWQgXCIsIFwibGVmdCBhbGlnbmVkXCIsIFwicmlnaHQgYWxpZ25lZFwiLCBcImp1c3RpZmllZFwiXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGF0dGFjaGVkKCkge1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
