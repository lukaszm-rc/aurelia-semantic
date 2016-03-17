System.register(['aurelia-framework'], function (_export) {
  "use strict";

  var customElement, containerless, bindable, UISegments;

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
      UISegments = (function () {
        var _instanceInitializers = {};

        function UISegments() {
          _classCallCheck(this, _UISegments);

          _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);
        }

        _createDecoratedClass(UISegments, [{
          key: 'type',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        var _UISegments = UISegments;
        UISegments = containerless()(UISegments) || UISegments;
        UISegments = customElement('ui-segments')(UISegments) || UISegments;
        return UISegments;
      })();

      _export('UISegments', UISegments);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxjQUFZLENBQUM7OzhDQVVBLFVBQVU7Ozs7Ozs7Ozs7d0NBSmYsYUFBYTt3Q0FBRSxhQUFhO21DQUFFLFFBQVE7OztBQUlqQyxnQkFBVTs7O2lCQUFWLFVBQVU7Ozs7Ozs4QkFBVixVQUFVOzt1QkFDckIsUUFBUTs7bUJBQVEsSUFBSTs7Ozs7MEJBRFQsVUFBVTtBQUFWLGtCQUFVLEdBRHRCLGFBQWEsRUFBRSxDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsYUFBYSxDQUFFLGFBQWEsQ0FBRSxDQUVsQixVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVUiLCJmaWxlIjoiZWxlbWVudHMvdWktc2VnbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIFNlZ21lbnRzIC0gaHR0cDovL3NlbWFudGljLXVpLmNvbS9lbGVtZW50cy9zZWdtZW50Lmh0bWwjc2VnbWVudHNcbiAqL1xuXG5pbXBvcnQge2N1c3RvbUVsZW1lbnQsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBjdXN0b21FbGVtZW50KCAndWktc2VnbWVudHMnIClcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVSVNlZ21lbnRzIHtcblx0QGJpbmRhYmxlIHR5cGUgPSBudWxsO1xufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
