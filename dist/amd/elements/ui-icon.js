define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdCQUFZLENBQUM7Ozs7Ozs7Ozs7OztRQVVBLE1BQU07OztpQkFBTixNQUFNOzs7Ozs7Ozs7OzhCQUFOLE1BQU07OzJDQUptQixRQUFROzt1QkFNekIsYUFBYTs7Ozs7MkNBTkksUUFBUTs7Ozs7MkNBQVIsUUFBUTs7Ozs7c0JBSWpDLE1BQU07QUFBTixjQUFNLEdBRGxCLHNCQUhzQixhQUFhLEdBR3BCLENBQ0gsTUFBTSxLQUFOLE1BQU07QUFBTixjQUFNLEdBRmxCLHNCQUZPLGFBQWEsRUFFTixTQUFTLENBQUMsQ0FFWixNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiZWxlbWVudHMvdWktaWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogSWNvbiAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaWNvbi5odG1sIy9kZWZpbml0aW9uXG4gKi9cblxuaW1wb3J0IHtjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCgndWktaWNvbicpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlJY29uIHtcblxuICAgIEBiaW5kYWJsZSBuYW1lID0gXCJoZWxwIGNpcmNsZVwiO1xuICAgIEBiaW5kYWJsZSBzaXplO1xuICAgIEBiaW5kYWJsZSB2YXJpYXRpb25zO1xuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
