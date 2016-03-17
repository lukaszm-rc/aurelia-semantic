"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7OztnQ0FFd0MsbUJBQW1COztJQUszRCxXQUFXOzs7OzBCQUFYLFdBQVc7Ozs7Ozs7Ozs7OztBQUtULGFBTEYsV0FBVyxHQUtOOzs7Ozs7O2FBRmQsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQztLQUd2RTs7MEJBTlEsV0FBVzs7ZUFRWixvQkFBRyxFQUNWOzs7dUJBVFEsV0FBVztBQUFYLGVBQVcsR0FEdkIsc0NBQWUsQ0FDSCxXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FGdkIscUNBQWMsY0FBYyxDQUFDLENBRWpCLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJlbGVtZW50cy91aS1jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbkBjdXN0b21FbGVtZW50KCd1aS1jb250YWluZXInKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVpQ29udGFpbmVyIHtcbiAgICBAYmluZGFibGUgdHlwZTtcbiAgICBAYmluZGFibGUgdmFyaWF0aW9ucztcbiAgICB0eXBlcyA9IFtcInRleHRcIiwgXCJmbHVpZCBcIiwgXCJsZWZ0IGFsaWduZWRcIiwgXCJyaWdodCBhbGlnbmVkXCIsIFwianVzdGlmaWVkXCJdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgYXR0YWNoZWQoKSB7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
