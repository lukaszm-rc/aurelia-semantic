
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var UiHeader = (function () {
    var _instanceInitializers = {};

    function UiHeader() {
        _classCallCheck(this, _UiHeader);

        _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

        this.sizes = ["huge", "large", "medium", "small", "tiny"];
    }

    _createDecoratedClass(UiHeader, [{
        key: 'type',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return null;
        },
        enumerable: true
    }, {
        key: 'size',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return null;
        },
        enumerable: true
    }], null, _instanceInitializers);

    var _UiHeader = UiHeader;
    UiHeader = (0, _aureliaFramework.containerless)()(UiHeader) || UiHeader;
    UiHeader = (0, _aureliaFramework.customElement)('ui-header')(UiHeader) || UiHeader;
    return UiHeader;
})();

exports.UiHeader = UiHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztnQ0FNZ0QsbUJBQW1COztzQkFDbEUsUUFBUTs7OztJQUlULFFBQVE7OzthQUFSLFFBQVE7Ozs7Ozs7YUFJakIsS0FBSyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzs7OzBCQUozQyxRQUFROzs7O21CQUVBLElBQUk7Ozs7Ozs7bUJBQ0osSUFBSTs7Ozs7b0JBSFosUUFBUTtBQUFSLFlBQVEsR0FEcEIsc0NBQWUsQ0FDSCxRQUFRLEtBQVIsUUFBUTtBQUFSLFlBQVEsR0FGcEIscUNBQWMsV0FBVyxDQUFDLENBRWQsUUFBUSxLQUFSLFFBQVE7V0FBUixRQUFRIiwiZmlsZSI6ImVsZW1lbnRzL3VpLWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29udGVudCBIZWFkZXIgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL2hlYWRlci5odG1sI2NvbnRlbnQtaGVhZGVyc1xuICovXG5cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgY29udGFpbmVybGVzc30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuQGN1c3RvbUVsZW1lbnQoJ3VpLWhlYWRlcicpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlIZWFkZXIge1xuXG4gICAgQGJpbmRhYmxlIHR5cGUgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzaXplID0gbnVsbDtcbiAgICBzaXplcyA9IFtcImh1Z2VcIiwgXCJsYXJnZVwiLCBcIm1lZGl1bVwiLCBcInNtYWxsXCIsIFwidGlueVwiXTtcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
