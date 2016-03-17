define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var UISegments = (function () {
    var _instanceInitializers = {};

    function UISegments() {
      _classCallCheck(this, _UISegments);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);
    }

    _createDecoratedClass(UISegments, [{
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    var _UISegments = UISegments;
    UISegments = (0, _aureliaFramework.containerless)()(UISegments) || UISegments;
    UISegments = (0, _aureliaFramework.customElement)('ui-segments')(UISegments) || UISegments;
    return UISegments;
  })();

  exports.UISegments = UISegments;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VpLXNlZ21lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxjQUFZLENBQUM7Ozs7Ozs7Ozs7OztNQVVBLFVBQVU7OzthQUFWLFVBQVU7Ozs7OzswQkFBVixVQUFVOztxQ0FKZSxRQUFROztlQUs1QixJQUFJOzs7OztzQkFEVCxVQUFVO0FBQVYsY0FBVSxHQUR0QixzQkFIc0IsYUFBYSxHQUdwQixDQUNILFVBQVUsS0FBVixVQUFVO0FBQVYsY0FBVSxHQUZ0QixzQkFGTyxhQUFhLEVBRUwsYUFBYSxDQUFFLENBRWxCLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVSIsImZpbGUiOiJlbGVtZW50cy91aS1zZWdtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogU2VnbWVudHMgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL2VsZW1lbnRzL3NlZ21lbnQuaHRtbCNzZWdtZW50c1xuICovXG5cbmltcG9ydCB7Y3VzdG9tRWxlbWVudCwgY29udGFpbmVybGVzcywgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoICd1aS1zZWdtZW50cycgKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVJU2VnbWVudHMge1xuXHRAYmluZGFibGUgdHlwZSA9IG51bGw7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
