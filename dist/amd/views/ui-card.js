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

  var UICardElement = (function () {
    var _instanceInitializers = {};

    function UICardElement() {
      _classCallCheck(this, _UICardElement);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);
    }

    _createDecoratedClass(UICardElement, [{
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

    var _UICardElement = UICardElement;
    UICardElement = (0, _aureliaFramework.inject)(Element)(UICardElement) || UICardElement;
    UICardElement = (0, _aureliaFramework.customElement)('ui-card')(UICardElement) || UICardElement;
    return UICardElement;
  })();

  exports.UICardElement = UICardElement;

  var UICardContentElement = (function () {
    function UICardContentElement() {
      _classCallCheck(this, _UICardContentElement);
    }

    var _UICardContentElement = UICardContentElement;
    UICardContentElement = (0, _aureliaFramework.containerless)()(UICardContentElement) || UICardContentElement;
    UICardContentElement = (0, _aureliaFramework.useView)('./ui-card/content.html')(UICardContentElement) || UICardContentElement;
    UICardContentElement = (0, _aureliaFramework.customElement)('ui-card-content')(UICardContentElement) || UICardContentElement;
    return UICardContentElement;
  })();

  exports.UICardContentElement = UICardContentElement;

  var UICardImageElement = (function () {
    var _instanceInitializers2 = {};

    function UICardImageElement() {
      _classCallCheck(this, _UICardImageElement);

      _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers2);
    }

    _createDecoratedClass(UICardImageElement, [{
      key: 'src',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers2);

    var _UICardImageElement = UICardImageElement;
    UICardImageElement = (0, _aureliaFramework.containerless)()(UICardImageElement) || UICardImageElement;
    UICardImageElement = (0, _aureliaFramework.useView)('./ui-card/image.html')(UICardImageElement) || UICardImageElement;
    UICardImageElement = (0, _aureliaFramework.customElement)('ui-card-image')(UICardImageElement) || UICardImageElement;
    return UICardImageElement;
  })();

  exports.UICardImageElement = UICardImageElement;

  var UICardContentDescriptionElement = (function () {
    function UICardContentDescriptionElement() {
      _classCallCheck(this, _UICardContentDescriptionElement);
    }

    var _UICardContentDescriptionElement = UICardContentDescriptionElement;
    UICardContentDescriptionElement = (0, _aureliaFramework.containerless)()(UICardContentDescriptionElement) || UICardContentDescriptionElement;
    UICardContentDescriptionElement = (0, _aureliaFramework.useView)('./ui-card/content-description.html')(UICardContentDescriptionElement) || UICardContentDescriptionElement;
    UICardContentDescriptionElement = (0, _aureliaFramework.customElement)('ui-card-content-description')(UICardContentDescriptionElement) || UICardContentDescriptionElement;
    return UICardContentDescriptionElement;
  })();

  exports.UICardContentDescriptionElement = UICardContentDescriptionElement;

  var UICardContentExtraElement = (function () {
    function UICardContentExtraElement() {
      _classCallCheck(this, _UICardContentExtraElement);
    }

    var _UICardContentExtraElement = UICardContentExtraElement;
    UICardContentExtraElement = (0, _aureliaFramework.containerless)()(UICardContentExtraElement) || UICardContentExtraElement;
    UICardContentExtraElement = (0, _aureliaFramework.useView)('./ui-card/extra-content.html')(UICardContentExtraElement) || UICardContentExtraElement;
    UICardContentExtraElement = (0, _aureliaFramework.customElement)('ui-card-extra-content')(UICardContentExtraElement) || UICardContentExtraElement;
    return UICardContentExtraElement;
  })();

  exports.UICardContentExtraElement = UICardContentExtraElement;

  var UICardContentHeaderElement = (function () {
    function UICardContentHeaderElement() {
      _classCallCheck(this, _UICardContentHeaderElement);
    }

    var _UICardContentHeaderElement = UICardContentHeaderElement;
    UICardContentHeaderElement = (0, _aureliaFramework.containerless)()(UICardContentHeaderElement) || UICardContentHeaderElement;
    UICardContentHeaderElement = (0, _aureliaFramework.useView)('./ui-card/content-header.html')(UICardContentHeaderElement) || UICardContentHeaderElement;
    UICardContentHeaderElement = (0, _aureliaFramework.customElement)('ui-card-content-header')(UICardContentHeaderElement) || UICardContentHeaderElement;
    return UICardContentHeaderElement;
  })();

  exports.UICardContentHeaderElement = UICardContentHeaderElement;

  var UICardContentMetaElement = (function () {
    function UICardContentMetaElement() {
      _classCallCheck(this, _UICardContentMetaElement);
    }

    var _UICardContentMetaElement = UICardContentMetaElement;
    UICardContentMetaElement = (0, _aureliaFramework.containerless)()(UICardContentMetaElement) || UICardContentMetaElement;
    UICardContentMetaElement = (0, _aureliaFramework.useView)('./ui-card/content-meta.html')(UICardContentMetaElement) || UICardContentMetaElement;
    UICardContentMetaElement = (0, _aureliaFramework.customElement)('ui-card-content-meta')(UICardContentMetaElement) || UICardContentMetaElement;
    return UICardContentMetaElement;
  })();

  exports.UICardContentMetaElement = UICardContentMetaElement;
});
//# sourceMappingURL=data:application/json;base64,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QWpFdUMsYUFBYSxHQWlFckMsQ0FDSCx3QkFBd0IsS0FBeEIsd0JBQXdCO0FBQXhCLDRCQUF3QixHQUZwQyxzQkFoRThCLE9BQU8sRUFnRTdCLDZCQUE2QixDQUFDLENBRTFCLHdCQUF3QixLQUF4Qix3QkFBd0I7QUFBeEIsNEJBQXdCLEdBSHBDLHNCQS9EZSxhQUFhLEVBK0RiLHNCQUFzQixDQUFFLENBRzNCLHdCQUF3QixLQUF4Qix3QkFBd0I7V0FBeEIsd0JBQXdCIiwiZmlsZSI6InZpZXdzL3VpLWNhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtKi0gamF2YXNjcmlwdCAtKi0gKi9cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENhcmQgLSBodHRwOi8vc2VtYW50aWMtdWkuY29tL3ZpZXdzL2NhcmQuaHRtbFxuICovXG5cbmltcG9ydCB7aW5qZWN0LCBjdXN0b21FbGVtZW50LCB1c2VWaWV3LCBjb250YWluZXJsZXNzLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuQGN1c3RvbUVsZW1lbnQoICd1aS1jYXJkJyApXG5AaW5qZWN0KCBFbGVtZW50IClcbmV4cG9ydCBjbGFzcyBVSUNhcmRFbGVtZW50IHtcblxuXHRAYmluZGFibGUgdHlwZTtcblx0QGJpbmRhYmxlIHZhcmlhdGlvbnM7XG5cbn1cblxuXG4vKipcbiAqIG5jLWNhcmQtY29udGVudFxuICovXG5AY3VzdG9tRWxlbWVudCggJ3VpLWNhcmQtY29udGVudCcgKVxuQHVzZVZpZXcoJy4vdWktY2FyZC9jb250ZW50Lmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVJQ2FyZENvbnRlbnRFbGVtZW50IHt9XG5cblxuLyoqXG4gKiBuYy1jYXJkLWltYWdlXG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktY2FyZC1pbWFnZScgKVxuQHVzZVZpZXcoJy4vdWktY2FyZC9pbWFnZS5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVSUNhcmRJbWFnZUVsZW1lbnQge1xuXHRAYmluZGFibGUgc3JjO1xufVxuXG5cbi8qKlxuICogbmMtY2FyZC1jb250ZW50LWRlc2NyaXB0aW9uXG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktY2FyZC1jb250ZW50LWRlc2NyaXB0aW9uJyApXG5AdXNlVmlldygnLi91aS1jYXJkL2NvbnRlbnQtZGVzY3JpcHRpb24uaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVUlDYXJkQ29udGVudERlc2NyaXB0aW9uRWxlbWVudCB7fVxuXG5cbi8qKlxuICogbmMtY2FyZC1leHRyYS1jb250ZW50XG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktY2FyZC1leHRyYS1jb250ZW50JyApXG5AdXNlVmlldygnLi91aS1jYXJkL2V4dHJhLWNvbnRlbnQuaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVUlDYXJkQ29udGVudEV4dHJhRWxlbWVudCB7fVxuXG5cbi8qKlxuICogbmMtY2FyZC1jb250ZW50LWhlYWRlclxuICovXG5AY3VzdG9tRWxlbWVudCggJ3VpLWNhcmQtY29udGVudC1oZWFkZXInIClcbkB1c2VWaWV3KCcuL3VpLWNhcmQvY29udGVudC1oZWFkZXIuaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVUlDYXJkQ29udGVudEhlYWRlckVsZW1lbnQge31cblxuXG4vKipcbiAqIG5jLWNhcmQtY29udGVudC1tZXRhXG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktY2FyZC1jb250ZW50LW1ldGEnIClcbkB1c2VWaWV3KCcuL3VpLWNhcmQvY29udGVudC1tZXRhLmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVJQ2FyZENvbnRlbnRNZXRhRWxlbWVudCB7fVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
