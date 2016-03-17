
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var UiIcon = (function () {
    var _instanceInitializers = {};

    function UiIcon() {
        _classCallCheck(this, _UiIcon);

        _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

        _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);
    }

    _createDecoratedClass(UiIcon, [{
        key: 'name',
        decorators: [_aureliaFramework.bindable],
        initializer: function initializer() {
            return "help circle";
        },
        enumerable: true
    }, {
        key: 'size',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }, {
        key: 'variations',
        decorators: [_aureliaFramework.bindable],
        initializer: null,
        enumerable: true
    }], null, _instanceInitializers);

    var _UiIcon = UiIcon;
    UiIcon = (0, _aureliaFramework.containerless)()(UiIcon) || UiIcon;
    UiIcon = (0, _aureliaFramework.customElement)('ui-icon')(UiIcon) || UiIcon;
    return UiIcon;
})();

exports.UiIcon = UiIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2dDQU13QyxtQkFBbUI7O0lBSTNELE1BQU07OzthQUFOLE1BQU07Ozs7Ozs7Ozs7MEJBQU4sTUFBTTs7OzttQkFFRSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7a0JBRnJCLE1BQU07QUFBTixVQUFNLEdBRGxCLHNDQUFlLENBQ0gsTUFBTSxLQUFOLE1BQU07QUFBTixVQUFNLEdBRmxCLHFDQUFjLFNBQVMsQ0FBQyxDQUVaLE1BQU0sS0FBTixNQUFNO1dBQU4sTUFBTSIsImZpbGUiOiJlbGVtZW50cy91aS1pY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBJY29uIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9pY29uLmh0bWwjL2RlZmluaXRpb25cbiAqL1xuXG5pbXBvcnQge2N1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCd1aS1pY29uJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVaUljb24ge1xuXG4gICAgQGJpbmRhYmxlIG5hbWUgPSBcImhlbHAgY2lyY2xlXCI7XG4gICAgQGJpbmRhYmxlIHNpemU7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnM7XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
