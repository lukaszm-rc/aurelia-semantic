System.register(['aurelia-framework', 'jquery'], function (_export) {
  "use strict";

  var inject, customElement, useView, containerless, bindable, $, UICardElement, UICardContentElement, UICardImageElement, UICardContentDescriptionElement, UICardContentExtraElement, UICardContentHeaderElement, UICardContentMetaElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      useView = _aureliaFramework.useView;
      containerless = _aureliaFramework.containerless;
      bindable = _aureliaFramework.bindable;
    }, function (_jquery) {
      $ = _jquery['default'];
    }],
    execute: function () {
      UICardElement = (function () {
        var _instanceInitializers = {};

        function UICardElement() {
          _classCallCheck(this, _UICardElement);

          _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'variations', _instanceInitializers);
        }

        _createDecoratedClass(UICardElement, [{
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

        var _UICardElement = UICardElement;
        UICardElement = inject(Element)(UICardElement) || UICardElement;
        UICardElement = customElement('ui-card')(UICardElement) || UICardElement;
        return UICardElement;
      })();

      _export('UICardElement', UICardElement);

      UICardContentElement = (function () {
        function UICardContentElement() {
          _classCallCheck(this, _UICardContentElement);
        }

        var _UICardContentElement = UICardContentElement;
        UICardContentElement = containerless()(UICardContentElement) || UICardContentElement;
        UICardContentElement = useView('./ui-card/content.html')(UICardContentElement) || UICardContentElement;
        UICardContentElement = customElement('ui-card-content')(UICardContentElement) || UICardContentElement;
        return UICardContentElement;
      })();

      _export('UICardContentElement', UICardContentElement);

      UICardImageElement = (function () {
        var _instanceInitializers2 = {};

        function UICardImageElement() {
          _classCallCheck(this, _UICardImageElement);

          _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers2);
        }

        _createDecoratedClass(UICardImageElement, [{
          key: 'src',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers2);

        var _UICardImageElement = UICardImageElement;
        UICardImageElement = containerless()(UICardImageElement) || UICardImageElement;
        UICardImageElement = useView('./ui-card/image.html')(UICardImageElement) || UICardImageElement;
        UICardImageElement = customElement('ui-card-image')(UICardImageElement) || UICardImageElement;
        return UICardImageElement;
      })();

      _export('UICardImageElement', UICardImageElement);

      UICardContentDescriptionElement = (function () {
        function UICardContentDescriptionElement() {
          _classCallCheck(this, _UICardContentDescriptionElement);
        }

        var _UICardContentDescriptionElement = UICardContentDescriptionElement;
        UICardContentDescriptionElement = containerless()(UICardContentDescriptionElement) || UICardContentDescriptionElement;
        UICardContentDescriptionElement = useView('./ui-card/content-description.html')(UICardContentDescriptionElement) || UICardContentDescriptionElement;
        UICardContentDescriptionElement = customElement('ui-card-content-description')(UICardContentDescriptionElement) || UICardContentDescriptionElement;
        return UICardContentDescriptionElement;
      })();

      _export('UICardContentDescriptionElement', UICardContentDescriptionElement);

      UICardContentExtraElement = (function () {
        function UICardContentExtraElement() {
          _classCallCheck(this, _UICardContentExtraElement);
        }

        var _UICardContentExtraElement = UICardContentExtraElement;
        UICardContentExtraElement = containerless()(UICardContentExtraElement) || UICardContentExtraElement;
        UICardContentExtraElement = useView('./ui-card/extra-content.html')(UICardContentExtraElement) || UICardContentExtraElement;
        UICardContentExtraElement = customElement('ui-card-extra-content')(UICardContentExtraElement) || UICardContentExtraElement;
        return UICardContentExtraElement;
      })();

      _export('UICardContentExtraElement', UICardContentExtraElement);

      UICardContentHeaderElement = (function () {
        function UICardContentHeaderElement() {
          _classCallCheck(this, _UICardContentHeaderElement);
        }

        var _UICardContentHeaderElement = UICardContentHeaderElement;
        UICardContentHeaderElement = containerless()(UICardContentHeaderElement) || UICardContentHeaderElement;
        UICardContentHeaderElement = useView('./ui-card/content-header.html')(UICardContentHeaderElement) || UICardContentHeaderElement;
        UICardContentHeaderElement = customElement('ui-card-content-header')(UICardContentHeaderElement) || UICardContentHeaderElement;
        return UICardContentHeaderElement;
      })();

      _export('UICardContentHeaderElement', UICardContentHeaderElement);

      UICardContentMetaElement = (function () {
        function UICardContentMetaElement() {
          _classCallCheck(this, _UICardContentMetaElement);
        }

        var _UICardContentMetaElement = UICardContentMetaElement;
        UICardContentMetaElement = containerless()(UICardContentMetaElement) || UICardContentMetaElement;
        UICardContentMetaElement = useView('./ui-card/content-meta.html')(UICardContentMetaElement) || UICardContentMetaElement;
        UICardContentMetaElement = customElement('ui-card-content-meta')(UICardContentMetaElement) || UICardContentMetaElement;
        return UICardContentMetaElement;
      })();

      _export('UICardContentMetaElement', UICardContentMetaElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3VpLWNhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQVksQ0FBQzs7a0VBV0EsYUFBYSxFQWNiLG9CQUFvQixFQVNwQixrQkFBa0IsRUFXbEIsK0JBQStCLEVBUy9CLHlCQUF5QixFQVN6QiwwQkFBMEIsRUFTMUIsd0JBQXdCOzs7Ozs7Ozs7O2lDQWxFN0IsTUFBTTt3Q0FBRSxhQUFhO2tDQUFFLE9BQU87d0NBQUUsYUFBYTttQ0FBRSxRQUFROzs7OztBQUtsRCxtQkFBYTs7O2lCQUFiLGFBQWE7Ozs7Ozs7OzhCQUFiLGFBQWE7O3VCQUV4QixRQUFROzs7Ozt1QkFDUixRQUFROzs7Ozs2QkFIRyxhQUFhO0FBQWIscUJBQWEsR0FEekIsTUFBTSxDQUFFLE9BQU8sQ0FBRSxDQUNMLGFBQWEsS0FBYixhQUFhO0FBQWIscUJBQWEsR0FGekIsYUFBYSxDQUFFLFNBQVMsQ0FBRSxDQUVkLGFBQWEsS0FBYixhQUFhO2VBQWIsYUFBYTs7Ozs7QUFjYiwwQkFBb0I7aUJBQXBCLG9CQUFvQjs7OztvQ0FBcEIsb0JBQW9CO0FBQXBCLDRCQUFvQixHQURoQyxhQUFhLEVBQUUsQ0FDSCxvQkFBb0IsS0FBcEIsb0JBQW9CO0FBQXBCLDRCQUFvQixHQUZoQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FFckIsb0JBQW9CLEtBQXBCLG9CQUFvQjtBQUFwQiw0QkFBb0IsR0FIaEMsYUFBYSxDQUFFLGlCQUFpQixDQUFFLENBR3RCLG9CQUFvQixLQUFwQixvQkFBb0I7ZUFBcEIsb0JBQW9COzs7OztBQVNwQix3QkFBa0I7OztpQkFBbEIsa0JBQWtCOzs7Ozs7OEJBQWxCLGtCQUFrQjs7dUJBQzdCLFFBQVE7Ozs7O2tDQURHLGtCQUFrQjtBQUFsQiwwQkFBa0IsR0FEOUIsYUFBYSxFQUFFLENBQ0gsa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQiwwQkFBa0IsR0FGOUIsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBRW5CLGtCQUFrQixLQUFsQixrQkFBa0I7QUFBbEIsMEJBQWtCLEdBSDlCLGFBQWEsQ0FBRSxlQUFlLENBQUUsQ0FHcEIsa0JBQWtCLEtBQWxCLGtCQUFrQjtlQUFsQixrQkFBa0I7Ozs7O0FBV2xCLHFDQUErQjtpQkFBL0IsK0JBQStCOzs7OytDQUEvQiwrQkFBK0I7QUFBL0IsdUNBQStCLEdBRDNDLGFBQWEsRUFBRSxDQUNILCtCQUErQixLQUEvQiwrQkFBK0I7QUFBL0IsdUNBQStCLEdBRjNDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUVqQywrQkFBK0IsS0FBL0IsK0JBQStCO0FBQS9CLHVDQUErQixHQUgzQyxhQUFhLENBQUUsNkJBQTZCLENBQUUsQ0FHbEMsK0JBQStCLEtBQS9CLCtCQUErQjtlQUEvQiwrQkFBK0I7Ozs7O0FBUy9CLCtCQUF5QjtpQkFBekIseUJBQXlCOzs7O3lDQUF6Qix5QkFBeUI7QUFBekIsaUNBQXlCLEdBRHJDLGFBQWEsRUFBRSxDQUNILHlCQUF5QixLQUF6Qix5QkFBeUI7QUFBekIsaUNBQXlCLEdBRnJDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUUzQix5QkFBeUIsS0FBekIseUJBQXlCO0FBQXpCLGlDQUF5QixHQUhyQyxhQUFhLENBQUUsdUJBQXVCLENBQUUsQ0FHNUIseUJBQXlCLEtBQXpCLHlCQUF5QjtlQUF6Qix5QkFBeUI7Ozs7O0FBU3pCLGdDQUEwQjtpQkFBMUIsMEJBQTBCOzs7OzBDQUExQiwwQkFBMEI7QUFBMUIsa0NBQTBCLEdBRHRDLGFBQWEsRUFBRSxDQUNILDBCQUEwQixLQUExQiwwQkFBMEI7QUFBMUIsa0NBQTBCLEdBRnRDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUU1QiwwQkFBMEIsS0FBMUIsMEJBQTBCO0FBQTFCLGtDQUEwQixHQUh0QyxhQUFhLENBQUUsd0JBQXdCLENBQUUsQ0FHN0IsMEJBQTBCLEtBQTFCLDBCQUEwQjtlQUExQiwwQkFBMEI7Ozs7O0FBUzFCLDhCQUF3QjtpQkFBeEIsd0JBQXdCOzs7O3dDQUF4Qix3QkFBd0I7QUFBeEIsZ0NBQXdCLEdBRHBDLGFBQWEsRUFBRSxDQUNILHdCQUF3QixLQUF4Qix3QkFBd0I7QUFBeEIsZ0NBQXdCLEdBRnBDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUUxQix3QkFBd0IsS0FBeEIsd0JBQXdCO0FBQXhCLGdDQUF3QixHQUhwQyxhQUFhLENBQUUsc0JBQXNCLENBQUUsQ0FHM0Isd0JBQXdCLEtBQXhCLHdCQUF3QjtlQUF4Qix3QkFBd0IiLCJmaWxlIjoidmlld3MvdWktY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0qLSBqYXZhc2NyaXB0IC0qLSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ2FyZCAtIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vdmlld3MvY2FyZC5odG1sXG4gKi9cblxuaW1wb3J0IHtpbmplY3QsIGN1c3RvbUVsZW1lbnQsIHVzZVZpZXcsIGNvbnRhaW5lcmxlc3MsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5AY3VzdG9tRWxlbWVudCggJ3VpLWNhcmQnIClcbkBpbmplY3QoIEVsZW1lbnQgKVxuZXhwb3J0IGNsYXNzIFVJQ2FyZEVsZW1lbnQge1xuXG5cdEBiaW5kYWJsZSB0eXBlO1xuXHRAYmluZGFibGUgdmFyaWF0aW9ucztcblxufVxuXG5cbi8qKlxuICogbmMtY2FyZC1jb250ZW50XG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktY2FyZC1jb250ZW50JyApXG5AdXNlVmlldygnLi91aS1jYXJkL2NvbnRlbnQuaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVUlDYXJkQ29udGVudEVsZW1lbnQge31cblxuXG4vKipcbiAqIG5jLWNhcmQtaW1hZ2VcbiAqL1xuQGN1c3RvbUVsZW1lbnQoICd1aS1jYXJkLWltYWdlJyApXG5AdXNlVmlldygnLi91aS1jYXJkL2ltYWdlLmh0bWwnKVxuQGNvbnRhaW5lcmxlc3MoKVxuZXhwb3J0IGNsYXNzIFVJQ2FyZEltYWdlRWxlbWVudCB7XG5cdEBiaW5kYWJsZSBzcmM7XG59XG5cblxuLyoqXG4gKiBuYy1jYXJkLWNvbnRlbnQtZGVzY3JpcHRpb25cbiAqL1xuQGN1c3RvbUVsZW1lbnQoICd1aS1jYXJkLWNvbnRlbnQtZGVzY3JpcHRpb24nIClcbkB1c2VWaWV3KCcuL3VpLWNhcmQvY29udGVudC1kZXNjcmlwdGlvbi5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVSUNhcmRDb250ZW50RGVzY3JpcHRpb25FbGVtZW50IHt9XG5cblxuLyoqXG4gKiBuYy1jYXJkLWV4dHJhLWNvbnRlbnRcbiAqL1xuQGN1c3RvbUVsZW1lbnQoICd1aS1jYXJkLWV4dHJhLWNvbnRlbnQnIClcbkB1c2VWaWV3KCcuL3VpLWNhcmQvZXh0cmEtY29udGVudC5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVSUNhcmRDb250ZW50RXh0cmFFbGVtZW50IHt9XG5cblxuLyoqXG4gKiBuYy1jYXJkLWNvbnRlbnQtaGVhZGVyXG4gKi9cbkBjdXN0b21FbGVtZW50KCAndWktY2FyZC1jb250ZW50LWhlYWRlcicgKVxuQHVzZVZpZXcoJy4vdWktY2FyZC9jb250ZW50LWhlYWRlci5odG1sJylcbkBjb250YWluZXJsZXNzKClcbmV4cG9ydCBjbGFzcyBVSUNhcmRDb250ZW50SGVhZGVyRWxlbWVudCB7fVxuXG5cbi8qKlxuICogbmMtY2FyZC1jb250ZW50LW1ldGFcbiAqL1xuQGN1c3RvbUVsZW1lbnQoICd1aS1jYXJkLWNvbnRlbnQtbWV0YScgKVxuQHVzZVZpZXcoJy4vdWktY2FyZC9jb250ZW50LW1ldGEuaHRtbCcpXG5AY29udGFpbmVybGVzcygpXG5leHBvcnQgY2xhc3MgVUlDYXJkQ29udGVudE1ldGFFbGVtZW50IHt9XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
