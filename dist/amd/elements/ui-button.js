define(['exports', 'aurelia-framework', 'jquery'], function (exports, _aureliaFramework, _jquery) {
    "use strict";

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var _$ = _interopRequireDefault(_jquery);

    var interceptMethods = ['updateTarget', 'updateSource', 'callSource'];

    var UiButton = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(UiButton, [{
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
        }, {
            key: 'icon',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }, {
            key: 'state',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }, {
            key: 'variations',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }, {
            key: 'preset',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }, {
            key: 'click',
            decorators: [_aureliaFramework.bindable],
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
        UiButton = (0, _aureliaFramework.containerless)()(UiButton) || UiButton;
        UiButton = (0, _aureliaFramework.customElement)('ui-button')(UiButton) || UiButton;
        return UiButton;
    })();

    exports.UiButton = UiButton;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLWJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0JBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQVNiLFFBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDOztRQUczRCxRQUFROzs7OzhCQUFSLFFBQVE7OzJDQU53QixRQUFROzt1QkFPaEMsSUFBSTs7Ozs7MkNBUG9CLFFBQVE7O3VCQVFoQyxJQUFJOzs7OzsyQ0FSb0IsUUFBUTs7dUJBU2hDLElBQUk7Ozs7OzJDQVRvQixRQUFROzt1QkFVL0IsSUFBSTs7Ozs7MkNBVm1CLFFBQVE7O3VCQVcxQixJQUFJOzs7OzsyQ0FYYyxRQUFROzt1QkFZOUIsSUFBSTs7Ozs7MkNBWmtCLFFBQVE7Ozs7O0FBY3RDLGlCQVJGLFFBQVEsR0FRSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDVixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBRWxDOzs4QkFYUSxRQUFROzttQkFZTCxzQkFBQyxLQUFLLEVBQUU7QUFDaEIsdUJBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDL0I7Ozt3QkFkUSxRQUFRO0FBQVIsZ0JBQVEsR0FEcEIsc0JBTDZCLGFBQWEsR0FLM0IsQ0FDSCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLHNCQUplLGFBQWEsRUFJZCxXQUFXLENBQUMsQ0FFZCxRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVEiLCJmaWxlIjoiZWxlbWVudHMvdWktYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLSotIGphdmFzY3JpcHQgLSotICovXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb250ZW50IEhlYWRlciAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vZWxlbWVudHMvaGVhZGVyLmh0bWwjY29udGVudC1oZWFkZXJzXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGludGVyY2VwdE1ldGhvZHMgPSBbJ3VwZGF0ZVRhcmdldCcsICd1cGRhdGVTb3VyY2UnLCAnY2FsbFNvdXJjZSddO1xuQGN1c3RvbUVsZW1lbnQoJ3VpLWJ1dHRvbicpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVWlCdXR0b24ge1xuICAgIEBiaW5kYWJsZSB0eXBlID0gbnVsbDtcbiAgICBAYmluZGFibGUgc2l6ZSA9IG51bGw7XG4gICAgQGJpbmRhYmxlIGljb24gPSBudWxsO1xuICAgIEBiaW5kYWJsZSBzdGF0ZSA9IG51bGw7XG4gICAgQGJpbmRhYmxlIHZhcmlhdGlvbnMgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBwcmVzZXQgPSBudWxsO1xuICAgIEBiaW5kYWJsZSBjbGljaztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGljayA9IHRoaXMuZGVmYXVsdENsaWNrO1xuXG4gICAgfVxuICAgIGRlZmF1bHRDbGljayhldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlZmF1bHRDbGlja1wiKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
